import { getCards, getPublicCards } from '../../../api/cardData';
import addCardForm from '../forms/addCardForm';
import addCategoryForm from '../forms/addCategoryForm';
import navCategories from '../navCategoryRender';
import { renderCards, noCards } from '../pages/myCards';
import categoryFilter from './navFilter';

const navEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // GET USER CARDS
    if (e.target.id === 'myCardsBtn') {
      getCards(user.uid).then((cardsArr) => {
        renderCards(cardsArr, user.uid);
      });
    }
    // ADD CARD
    if (e.target.id === 'addCardBtn') {
      addCardForm(user.uid);
    }
    if (e.target.id === 'navbarDropdown') {
      navCategories(user.uid);
    }
    if (e.target.id === 'addCategory') {
      addCategoryForm();
    }
    if (e.target.id === 'communityBtn') {
      getPublicCards().then((cardsArr) => {
        const renderArray = cardsArr.filter((card) => card.uid !== user.uid && !card.cardCopied);
        if (cardsArr.length) {
          renderCards(renderArray, user.uid);
        } else {
          noCards('Tell your friends about the site !');
        }
      });
    }
  });

  // NAV CATEGORY FILTER
  document.querySelector('#navCategories').addEventListener('click', (e) => {
    if (e.target.id.includes('navCat')) {
      const [, filterStr] = e.target.id.split('--');
      // eslint-disable-next-line no-use-before-define
      categoryFilter(user.uid, filterStr);
    }
  });
  // SEARCH CARD
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchBar = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      getCards(user.uid).then((cardsArr) => {
        const renderArr = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const card of cardsArr) {
          if (card.title.toLowerCase().includes(searchBar)) {
            renderArr.push(card);
          }
          if (renderArr.length) {
            renderCards(renderArr, user.uid);
          } else {
            noCards('Hmmmm...Nothing Found. Try Again or Add the Card');
          }
        }
      });
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;

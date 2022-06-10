import { getCards } from '../../../api/cardData';
import addCardForm from '../forms/addCardForm';
import addCategoryForm from '../forms/addCategoryForm';
import navCategories from '../navCategoryRender';
import { renderCards, noCards } from '../pages/myCards';
import categoryFilter from './navFilter';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // GET USER CARDS
    if (e.target.id === 'myCardsBtn') {
      getCards(uid).then((cardsArr) => {
        renderCards(cardsArr);
      });
    }
    // ADD CARD
    if (e.target.id === 'addCardBtn') {
      addCardForm(uid);
    }
    if (e.target.id === 'navbarDropdown') {
      navCategories(uid);
    }
    if (e.target.id === 'addCategory') {
      addCategoryForm();
    }
  });

  // NAV CATEGORY FILTER
  document.querySelector('#navCategories').addEventListener('click', (e) => {
    if (e.target.id.includes('navCat')) {
      const [, filterStr] = e.target.id.split('--');
      // eslint-disable-next-line no-use-before-define
      categoryFilter(uid, filterStr);
    }
  });
  // SEARCH CARD
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchBar = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      getCards(uid).then((cardsArr) => {
        const renderArr = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const card of cardsArr) {
          if (card.title.toLowerCase().includes(searchBar)) {
            renderArr.push(card);
          }
          if (renderArr.length) {
            renderCards(renderArr);
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

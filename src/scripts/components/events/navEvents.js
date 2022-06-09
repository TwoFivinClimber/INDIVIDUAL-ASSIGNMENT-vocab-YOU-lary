import { getCards } from '../../../api/cardData';
import addCardForm from '../forms/addCardForm';
import addCategoryForm from '../forms/addCategoryForm';
import { renderCards, noCards } from '../pages/myCards';

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
      addCardForm();
    }
    if (e.target.id === 'addCategory') {
      addCategoryForm();
    }
    if (e.target.id === 'html') {
      // eslint-disable-next-line no-use-before-define
      categoryFilter(uid, 'Tech-HTML');
    }
    if (e.target.id === 'javaScript') {
      // eslint-disable-next-line no-use-before-define
      categoryFilter(uid, 'Tech-JavaScript');
    }
    if (e.target.id === 'css') {
      // eslint-disable-next-line no-use-before-define
      categoryFilter(uid, 'Tech-CSS');
    }
    if (e.target.id === 'python') {
      // eslint-disable-next-line no-use-before-define
      categoryFilter(uid, 'Tech-Python');
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

// NAV FILTER
const categoryFilter = (uid, str) => {
  getCards(uid).then((cardsArr) => {
    const catArray = cardsArr.filter((card) => card.category === str);
    renderCards(catArray);
  });
};

export default navEvents;

import { deleteCard, getCards, getSingleCard } from '../../../api/cardData';
import { renderCards } from '../pages/myCards';
import addCardForm from '../forms/addCardForm';

const domEvents = (uid) => {
  document.querySelector('#card-div').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteCard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("Are you sure you'll remember it and want to delete ?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((booksArr) => renderCards(booksArr));
      }
    }
    if (e.target.id.includes('editCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
  });
  document.querySelector('#sort-div').addEventListener('click', (e) => {
    if (e.target.id === 'aToZ') {
      getCards(uid).then((cardsArr) => {
        const alphaArr = cardsArr.sort((a, b) => a.title.localeCompare(b.title));
        renderCards(alphaArr);
      });
    }
    if (e.target.id === 'zToA') {
      getCards(uid).then((cardsArr) => {
        const revAlphaArr = cardsArr.sort((a, b) => b.title.localeCompare(a.title));
        renderCards(revAlphaArr);
      });
    }
    if (e.target.id === 'newest') {
      getCards(uid).then((cardsArr) => {
        const earlyArr = cardsArr.sort((a, b) => a.dateData - b.dateData);
        renderCards(earlyArr);
      });
    }
    if (e.target.id === 'oldest') {
      getCards(uid).then((cardsArr) => {
        const oldArr = cardsArr.sort((a, b) => b.dateData - a.dateData);
        renderCards(oldArr);
      });
    }
  });
};

export default domEvents;

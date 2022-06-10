import {
  createCard,
  deleteCard, getCards, getSingleCard, updateCard
} from '../../../api/cardData';
import { renderCards } from '../pages/myCards';
import addCardForm from '../forms/addCardForm';

const domEvents = (uid) => {
  document.querySelector('#card-div').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteCard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("Are you sure you'll remember it and want to delete ?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArr) => renderCards(cardsArr, uid));
      }
    }
    if (e.target.id.includes('editCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(uid, cardObj));
    }
    if (e.target.id.includes('isPublic')) {
      const [, firebaseKey] = e.target.id.split('--');
      const patch = { isPublic: document.querySelector(`#isPublic--${firebaseKey}`).checked };
      updateCard(patch, firebaseKey);
    }
    if (e.target.id.includes('copyCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => {
        const newCard = {
          category: cardObj.category,
          description: cardObj.description,
          title: cardObj.title,
          isPublic: cardObj.isPublic,
          uid,
          date: new Date().toLocaleString(),
          dateData: Date.now()
        };
        createCard(newCard, uid).then((cardsArr) => renderCards(cardsArr, uid));
      });
    }
  });
  document.querySelector('#sort-div').addEventListener('click', (e) => {
    if (e.target.id === 'aToZ') {
      getCards(uid).then((cardsArr) => {
        const alphaArr = cardsArr.sort((a, b) => a.title.localeCompare(b.title));
        renderCards(alphaArr, uid);
      });
    }
    if (e.target.id === 'zToA') {
      getCards(uid).then((cardsArr) => {
        const revAlphaArr = cardsArr.sort((a, b) => b.title.localeCompare(a.title));
        renderCards(revAlphaArr, uid);
      });
    }
    if (e.target.id === 'newest') {
      getCards(uid).then((cardsArr) => {
        const earlyArr = cardsArr.sort((a, b) => a.dateData - b.dateData);
        renderCards(earlyArr, uid);
      });
    }
    if (e.target.id === 'oldest') {
      getCards(uid).then((cardsArr) => {
        const oldArr = cardsArr.sort((a, b) => b.dateData - a.dateData);
        renderCards(oldArr, uid);
      });
    }
  });
};

export default domEvents;

import { createCard, updateCard } from '../../../api/cardData';
import { renderCards } from '../pages/myCards';

const formEvents = (uid) => {
  document.querySelector('#form-div').addEventListener('submit', (e) => {
    e.preventDefault();
    // CREATE CARD
    if (e.target.id.includes('create-card')) {
      const cardObj = {
        category: document.querySelector('#select-category').value,
        description: document.querySelector('#description').value,
        title: document.querySelector('#title').value,
        uid
      };
      createCard(cardObj, uid).then((cardsArr) => {
        renderCards(cardsArr);
      });
    }
    // UPDATE CARD
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        category: document.querySelector('#select-category').value,
        description: document.querySelector('#description').value,
        title: document.querySelector('#title').value,
        firebaseKey,
        uid
      };
      updateCard(cardObj).then((cardsArray) => renderCards(cardsArray));
    }
  });
};

export default formEvents;

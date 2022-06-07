import { createCard } from '../../../api/cardData';
import renderCards from '../pages/myCards';

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
  });
};

export default formEvents;

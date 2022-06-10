import { createCard, updateCard } from '../../../api/cardData';
import { addCategory } from '../../../api/categoryData';
import addCardForm from '../forms/addCardForm';
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
        isPublic: document.querySelector('#isPublic').checked,
        uid,
        date: new Date().toLocaleString(),
        dateData: Date.now()
      };
      createCard(cardObj, uid).then((cardsArr) => {
        renderCards(cardsArr, uid);
      });
    }
    if (e.target.id.includes('add-category')) {
      const newCategory = document.querySelector('#newCategory').value;
      const catObj = {
        name: `Tech-${newCategory}`,
        uid
      };
      addCategory(catObj, uid).then(() => {
        addCardForm(uid, {});
      });
    }
    // UPDATE CARD
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        category: document.querySelector('#select-category').value,
        description: document.querySelector('#description').value,
        title: document.querySelector('#title').value,
        isPublic: document.querySelector('#isPublic').checked,
        firebaseKey,
        uid
      };
      updateCard(cardObj).then((cardsArray) => renderCards(cardsArray, uid));
    }
  });
  document.querySelector('#form-div').addEventListener('click', (e) => {
    if (e.target.id === 'cancel-edit') {
      document.getElementById('myCardsBtn').click();
    }
  });
};

export default formEvents;

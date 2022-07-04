import { createCard, updateCard } from '../../../api/cardData';
import { addCategory, updateCategory } from '../../../api/categoryData';
import addCardForm from '../forms/addCardForm';
import { renderCards } from '../pages/myCards';
import categoryFilter from './navFilter';

const formEvents = (user) => {
  document.querySelector('#form-div').addEventListener('submit', (e) => {
    e.preventDefault();
    // CREATE CARD
    if (e.target.id.includes('create-card')) {
      const cardObj = {
        category: document.querySelector('#select-category').value,
        description: document.querySelector('#description').value,
        title: document.querySelector('#title').value,
        isPublic: document.querySelector('#isPublic').checked,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        date: new Date().toLocaleString(),
        dateData: Date.now()
      };
      createCard(cardObj, user.uid).then((cardsArr) => {
        renderCards(cardsArr, user.uid);
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
        uid: user.uid
      };
      updateCard(cardObj).then((cardsArray) => renderCards(cardsArray, user.uid));
    }
    if (e.target.id.includes('add-category')) {
      const newCategory = document.querySelector('#newCategory').value;
      const catObj = {
        name: `Tech-${newCategory}`,
        uid: user.uid
      };
      addCategory(catObj, user.uid).then(() => {
        addCardForm(user.uid, {});
      });
    }
    if (e.target.id.includes('edit-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      const catObj = {
        name: document.querySelector('#newCategory').value
      };
      updateCategory(firebaseKey, catObj).then(() => {
        categoryFilter(user.uid, catObj.name, firebaseKey);
      });
    }
  });
  document.querySelector('#form-div').addEventListener('click', (e) => {
    if (e.target.id === 'cancel-edit') {
      document.getElementById('myCardsBtn').click();
    }
  });
};

export default formEvents;

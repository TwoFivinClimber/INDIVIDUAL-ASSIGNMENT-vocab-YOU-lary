import {
  createCard,
  deleteCard, getCards, getSingleCard, updateCard
} from '../../../api/cardData';
import { renderCards } from '../pages/myCards';
import addCardForm from '../forms/addCardForm';
import { getSingleCategory } from '../../../api/categoryData';
import addCategoryForm from '../forms/addCategoryForm';

const domEvents = (user) => {
  document.querySelector('#card-div').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteCard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm("Are you sure you'll remember it and want to delete ?")) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, user.uid).then((cardsArr) => renderCards(cardsArr, user.uid));
      }
    }
    if (e.target.id.includes('editCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(user.uid, cardObj));
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
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          cardCopied: true,
          copiedFrom: cardObj.displayName,
          date: new Date().toLocaleString(),
          dateData: Date.now()
        };
        createCard(newCard, user.uid).then((cardsArr) => renderCards(cardsArr, user.uid));
      });
    }
  });
  // CRUD Category
  document.querySelector('#contentHeader').addEventListener('click', (e) => {
    if (e.target.id.includes('editCat')) {
      const [, catName] = e.target.id.split('--');
      getSingleCategory(catName).then((catObj) => {
        addCategoryForm(catObj);
      });
    }
    if (e.target.id.includes('deleteCat')) {
      console.warn('trashCat');
    }
  });
  document.querySelector('#sort-div').addEventListener('click', (e) => {
    if (e.target.id === 'aToZ') {
      getCards(user.uid).then((cardsArr) => {
        const alphaArr = cardsArr.sort((a, b) => a.title.localeCompare(b.title));
        renderCards(alphaArr, user.uid);
      });
    }
    if (e.target.id === 'zToA') {
      getCards(user.uid).then((cardsArr) => {
        const revAlphaArr = cardsArr.sort((a, b) => b.title.localeCompare(a.title));
        renderCards(revAlphaArr, user.uid);
      });
    }
    if (e.target.id === 'newest') {
      getCards(user.uid).then((cardsArr) => {
        const earlyArr = cardsArr.sort((a, b) => a.dateData - b.dateData);
        renderCards(earlyArr, user.uid);
      });
    }
    if (e.target.id === 'oldest') {
      getCards(user.uid).then((cardsArr) => {
        const oldArr = cardsArr.sort((a, b) => b.dateData - a.dateData);
        renderCards(oldArr, user.uid);
      });
    }
  });
};

export default domEvents;

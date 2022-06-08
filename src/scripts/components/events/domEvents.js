import { deleteCard, getSingleCard } from '../../../api/cardData';
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
      console.warn('alphabetical clicked');
    }
  });
};

export default domEvents;

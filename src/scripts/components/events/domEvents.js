import { deleteCard } from '../../../api/cardData';
import renderCards from '../pages/myCards';

const domEvents = (uid) => {
  document.querySelector('#card-div').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCard(firebaseKey, uid).then((booksArr) => renderCards(booksArr));
    }
  });
};

export default domEvents;

import { getCards } from '../../../api/cardData';
import addCardForm from '../forms/addCardForm';
import renderCards from '../pages/myCards';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id === 'myCardsBtn') {
      getCards(uid).then((cardsArr) => {
        renderCards(cardsArr);
      });
    }
    if (e.target.id === 'addCardBtn') {
      addCardForm();
    }
  });
};

export default navEvents;

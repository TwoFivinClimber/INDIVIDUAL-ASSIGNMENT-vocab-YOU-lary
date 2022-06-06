import { getCards } from '../../../api/cardData';
import renderCards from '../pages/myCards';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id === 'myCardsBtn') {
      getCards(uid).then((cardsArr) => {
        renderCards(cardsArr);
      });
    }
  });
};

export default navEvents;

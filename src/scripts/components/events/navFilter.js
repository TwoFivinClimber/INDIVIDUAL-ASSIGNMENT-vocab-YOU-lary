import { getCards } from '../../../api/cardData';
import { renderCards } from '../pages/myCards';

// NAV FILTER
const categoryFilter = (uid, str) => {
  getCards(uid).then((cardsArr) => {
    const catArray = cardsArr.filter((card) => card.category === str);
    renderCards(catArray);
  });
};

export default categoryFilter;

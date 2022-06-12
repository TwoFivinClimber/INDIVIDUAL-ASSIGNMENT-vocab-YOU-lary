import { getCards } from '../../../api/cardData';
import renderToDom from '../../helpers/renderToDom';
import { renderCards } from '../pages/myCards';

// NAV FILTER
const categoryFilter = (uid, str) => {
  const content = `<h3 class="catHead">${str}</h3> <i id="editCat--${str}" type="button" class="edit fa-solid fa-user-pen fa-2x"></i>
  <i id="deleteCat--${str}" type="button" class="trash fa-solid fa-trash-can fa-2x"></i>`;
  getCards(uid).then((cardsArr) => {
    const catArray = cardsArr.filter((card) => card.category === str);
    renderCards(catArray, uid);
    renderToDom('#contentHeader', content);
  });
};

export default categoryFilter;

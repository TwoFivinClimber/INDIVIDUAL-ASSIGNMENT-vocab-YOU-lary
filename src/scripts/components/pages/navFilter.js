import { getCards } from '../../../api/cardData';
import renderToDom from '../../helpers/renderToDom';
import { renderCards } from './myCards';

// NAV FILTER
const categoryFilter = (uid, name, firebaseKey) => {
  const content = `<h3 class="catHead">${name}</h3> <i id="editCat--${name}--${firebaseKey}" type="button" class="editCat edit fa-solid fa-user-pen fa-1x"></i>
  <i id="deleteCat--${name}--${firebaseKey}" type="button" class="trashCat trash fa-solid fa-trash-can fa-1x"></i>`;
  getCards(uid).then((cardsArr) => {
    const catArray = cardsArr.filter((card) => card.category === name);
    renderCards(catArray, uid);
    renderToDom('#contentHeader', content);
    document.querySelector('#sort-div').innerHTML = '';
  });
};

export default categoryFilter;

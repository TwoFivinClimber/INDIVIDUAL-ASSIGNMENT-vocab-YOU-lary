import { getCategories } from '../../api/categoryData';
import renderToDom from '../helpers/renderToDom';

const navCategories = (uid) => {
  let content = '';
  getCategories(uid).then((catArray) => {
    catArray.forEach((category) => {
      content += `<li><a id="navCat--${category.name}--${category.firebaseKey}" value="${category.name}" class="dropdown-item" href="#">${category.name}</a></li>`;
    });
    content += '<li><a id="addCategory" class="dropdown-item" href="#">Add A Category</a></li>';
    renderToDom('#navCategories', content);
  });
};

export default navCategories;

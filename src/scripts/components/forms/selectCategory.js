import { getCategories } from '../../../api/categoryData';
import renderToDom from '../../helpers/renderToDom';

const selectCategory = (uid, obj) => {
  let content = '<option value="">Select a Category</option>';
  getCategories(uid).then((catArray) => {
    catArray.forEach((category) => {
      content += `<option value="${category.name}" ${category.name === obj.category ? 'selected' : ''}>${category.name}</option>`;
    });
    renderToDom('#select-category', content);
  });
};

export default selectCategory;

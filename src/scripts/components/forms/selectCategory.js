import { getCategories } from '../../../api/categoryData';
import renderToDom from '../../helpers/renderToDom';
import addCategoryForm from './addCategoryForm';

const selectCategory = (uid, obj) => {
  let content = '<option value="">Select a Category</option>';
  getCategories(uid).then((catArray) => {
    if (catArray.length) {
      catArray.forEach((category) => {
        content += `<option id=${category.fireBaseKey} value="${category.name}" ${category.name === obj.category ? 'selected' : ''}>${category.name}</option>`;
      });
      renderToDom('#select-category', content);
    } else {
      addCategoryForm();
    }
  });
};

export default selectCategory;

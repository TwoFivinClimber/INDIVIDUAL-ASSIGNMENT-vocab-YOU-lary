import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addCategoryForm = (obj = {}) => {
  clearDom();
  const content = `<form id="${obj.firebaseKey ? `edit-category--${obj.firebaseKey}` : 'add-category'}">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">${obj.firebaseKey ? 'Edit Category' : 'New Category'}</label>
    <input id="newCategory" type="text" class="form-control" placeholder="Enter a Tech Category or Topic" value="${obj.name || ''}" required>
    <input class="edit-submit btn btn-primary" type="submit" value="Submit">
    <input id="cancel-add-category" class="cancel btn btn-primary" type="reset" value="Cancel">
    </div>
  </form>`;
  renderToDom('#form-div', content);
};

export default addCategoryForm;

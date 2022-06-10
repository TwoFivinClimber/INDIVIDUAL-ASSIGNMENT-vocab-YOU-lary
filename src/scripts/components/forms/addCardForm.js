import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';
import selectCategory from './selectCategory';

const addCardForm = (uid, obj = {}) => {
  clearDom();
  const content = `<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'create-card'}">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Card Title</label>
    <input id="title" type="text" class="form-control" placeholder="Enter Word or Topic Here" value="${obj.title || ''}" required>
    <label for="select-category" class="form-label">Category</label>
    <select id="select-category" class="form-select" aria-label="Default select example" required>
    </select>
    <label for="description" class="form-label">Description</label>
    <textarea id="description" class="form-control" id="description" rows="3" required>${obj.description || ''}</textarea>
    <input class="edit-submit btn btn-primary" type="submit" value="Submit">
    <input id="cancel-edit" class="cancel btn btn-primary" type="reset" value="Cancel">
    </div>
  </form>`;
  renderToDom('#form-div', content);
  selectCategory(uid, obj);
};

export default addCardForm;

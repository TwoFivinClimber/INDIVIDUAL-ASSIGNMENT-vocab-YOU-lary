import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const noCards = () => {
  const content = '<h1>Add A Card to Grow Your Vocabulary</h1>';
  renderToDom('#card-div', content);
};

const renderCards = (arr) => {
  clearDom();
  if (arr.length) {
    let content = '';
    arr.forEach((card) => {
      content += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${card.category}</h6>
    <p class="card-desc card-text">${card.description}</p>
    <button type="button" class="btn btn-outline-success">Edit</button>
    <button id="deleteCard--${card.firebaseKey}"type="button" class="btn btn-outline-danger">Delete</button>
  </div>
</div>`;
    });
    renderToDom('#card-div', content);
  } else {
    noCards();
  }
};

export default renderCards;

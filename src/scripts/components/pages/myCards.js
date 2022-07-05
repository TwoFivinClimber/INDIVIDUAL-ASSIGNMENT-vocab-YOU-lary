import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';
import renderFilter from './cardFilter';

const noCards = (str) => {
  clearDom();
  const content = `<h1 class="noCard">${str || 'Add A Card to Grow Your Vocabulary'}</h1>`;
  renderToDom('#card-div', content);
};

const renderCards = (arr, uid) => {
  clearDom();
  if (arr.length) {
    let content = '';
    arr.forEach((card) => {
      content += `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${card.category}</h6>
    <p class="card-desc card-text">${card.description}</p>
    <div class="cardMod form-check form-switch">
    <input class="${card.uid !== uid ? 'mod' : ''} pubCheck form-check-input" type="checkbox" role="switch" id="isPublic--${card.firebaseKey}" ${card.isPublic ? 'checked' : ''}>
    <label class="${card.uid !== uid ? 'mod' : ''} form-check-label" for="flexSwitchCheckDefault">Public</label>
  </div>
    <i id="editCard--${card.firebaseKey}" type="button" class="${card.uid !== uid ? 'mod' : ''} edit fa-solid fa-user-pen fa-2x"></i>
    <i id="deleteCard--${card.firebaseKey}"type="button" class="${card.uid !== uid ? 'mod' : ''} trash fa-solid fa-trash-can fa-2x"></i>
    <button id="copyCard--${card.firebaseKey}" class="${card.uid === uid ? 'mod' : ''} btn btn-success" for="success-outlined">Add to Collection</button>
  <div userDIV>
    <span id="userOnCard" class="${card.uid === uid ? 'mod' : ''} userText">Created By: ${card.displayName}</span>
    <img id="userIcon" class="${card.uid === uid ? 'mod' : ''} userIcon" src="${card.photoURL}"></img>
  </div>
    <div class="cardDate">${card.cardCopied ? `Copied from ${card.copiedFrom} on ` : 'Created: '}${card.date}</div>
  </div>
</div>`;
    });
    renderToDom('#card-div', content);
    renderFilter();
  } else {
    noCards();
  }
};

export { renderCards, noCards };

import renderToDom from '../helpers/renderToDom';

const domBuild = () => {
  const content = `
  <div id="navigation"></div>
  <div class="main-div">
  <div id="contentHeader" clas="contentHeader"></div>
  <div class="sort-div" id="sort-div"></div>
  <div class="card-div" id="card-div"></div>
  <div class= "form-div" id="form-div"></div>
  </div>
  <div class="footer" id="footer"></footer>
  `;
  renderToDom('#app', content);
};

export default domBuild;

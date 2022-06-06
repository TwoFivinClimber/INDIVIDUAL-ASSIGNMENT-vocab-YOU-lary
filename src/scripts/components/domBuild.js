import renderToDom from '../helpers/renderToDom';

const domBuild = () => {
  const content = `
  <div id="navigation"></div>
  <div class="card-div" id="card-div"></div>
  `;
  renderToDom('#app', content);
};

export default domBuild;

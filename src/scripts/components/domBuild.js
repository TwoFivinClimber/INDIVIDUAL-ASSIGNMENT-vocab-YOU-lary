import renderToDom from '../helpers/renderToDom';

const domBuild = () => {
  const content = `
  <div id="navigation"></div>
  `;
  renderToDom('#app', content);
};

export default domBuild;

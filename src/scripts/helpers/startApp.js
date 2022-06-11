import domBuild from '../components/domBuild';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/login/logoutButton';
import navBar from '../components/navBar';
import clearDom from './clearDom';
import domEvents from '../components/events/domEvents';
import renderFooter from '../components/pages/footer';

const startApp = (user) => {
  domBuild();
  clearDom();
  navBar(user);
  renderFooter();
  logoutButton();
  navEvents(user.uid);
  formEvents(user);
  domEvents(user.uid);
  document.getElementById('myCardsBtn').click();
};

export default startApp;

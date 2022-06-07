import domBuild from '../components/domBuild';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/login/logoutButton';
import navBar from '../components/navBar';
import clearDom from './clearDom';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuild();
  clearDom();
  navBar();
  logoutButton();
  navEvents(user.uid);
  formEvents(user.uid);
  domEvents(user.uid);
};

export default startApp;

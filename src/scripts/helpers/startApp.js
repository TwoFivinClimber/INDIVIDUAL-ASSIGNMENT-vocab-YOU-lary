import domBuild from '../components/domBuild';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/login/logoutButton';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuild();
  navBar();
  logoutButton();
  navEvents(user.uid);
};

export default startApp;

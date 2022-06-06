import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/login/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import clearDom from './clearDom';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      clearDom();
      startApp(user);
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;

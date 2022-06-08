import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../../helpers/clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  document.querySelector('#navigation').innerHTML = '';
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="signOutBtn btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#logout-nav').addEventListener('click', signMeOut);
};

export default logoutButton;

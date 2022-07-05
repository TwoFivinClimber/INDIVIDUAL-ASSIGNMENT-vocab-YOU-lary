import signIn from '../../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1 class="welcome" id="welcome">Welcome To Vocab-You !</h1><button id="google-auth" class="loginBtn btn btn-danger">GOOGLE LOGIN</button><div class="welcome-par">Learning takes repetition and knowledge. Vocab-You is designed for the keeping and sharing of vocabulary cards about anything you wish to remember.  Create your first card to get started.  Check out the community tab to see what others are learning and make them your own.</div>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

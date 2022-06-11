import signIn from '../../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1 class="welcome" id="welcome">Welcome To Vocab-You !</h1><button id="google-auth" class="loginBtn btn btn-danger">GOOGLE LOGIN</button><div class="welcome-par">The world of tech is huge and only getting bigger.  As you learn about tech, this site helps you categorize, and define anythng that you care to remember. Create a category and make your first card to get started. Check out other users cards and make them your own.</div>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

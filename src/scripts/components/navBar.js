import renderToDom from '../helpers/renderToDom';
import navCategories from './navCategoryRender';

const navBar = (user) => {
  const content = `<nav class="navbar navbar-expand-lg navbar-dark bg-inverse mb-5">
  <div class="nav-cont container-fluid">
  <i class="fa-solid fa-id-card fa-3x"></i>
    <i class="vocab-you navbar-brand" href="#">VocabYou</i>
    <button class="navBtn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="myCardsBtn"class="nav-link active" aria-current="page" href="#">My Cards</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Categories
            </a>
            <ul id="navCategories" class="dropdown-menu" aria-labelledby="navbarDropdown">
           
            </ul>
          </li>
          <li class="nav-item">
          <a id="addCardBtn" class="nav-link active" aria-current="page" href="#">Add a Card</a>
          </li>
          <li class="nav-item">
          <a id="communityBtn" class="nav-link active" aria-current="page" href="#">Community Cards</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input id="search" class="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div id="logout-nav"></div>
        <img id="userIcon" class="userIcon" src="${user.photoURL}"></img>
      </div>
    </div>
  </nav>`;
  renderToDom('#navigation', content);
  navCategories(user.uid);
};

export default navBar;

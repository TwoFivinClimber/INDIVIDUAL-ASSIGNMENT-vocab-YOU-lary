import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const content = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
  <i class="fa-solid fa-book fa-3x"></i>
    <i class="vocab-you navbar-brand" href="#">VocabYou</i>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a id="html" class="dropdown-item" href="#">Tech: HTML</a></li>
              <li><a id="javaScript" class="dropdown-item" href="#">Tech: JavaScript</a></li>
              <li><a id="css" class="dropdown-item" href="#">Tech: CSS</a></li>
              <li><a id="python" class="dropdown-item" href="#">Tech: Python</a></li>
            </ul>
          </li>
          <li class="nav-item">
          <a id="addCardBtn" class="nav-link active" aria-current="page" href="#">Add a Card</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input id="search" class="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div id="logout-nav"></div>
      </div>
    </div>
  </nav>`;
  renderToDom('#navigation', content);
};

export default navBar;

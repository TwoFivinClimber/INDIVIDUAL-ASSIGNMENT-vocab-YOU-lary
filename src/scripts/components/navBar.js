import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const content = `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="myCardsBtn"class="nav-link active" aria-current="page" href="#">My Cards</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
          </li>
          <li class="nav-item">
          <a id="addCardBtn" class="nav-link active" aria-current="page" href="#">Add a Card</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div id="logout-nav"></div>
      </div>
    </div>
  </nav>`;
  renderToDom('#navigation', content);
};

export default navBar;

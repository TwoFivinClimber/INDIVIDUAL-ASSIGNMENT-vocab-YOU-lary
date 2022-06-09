import renderToDom from '../../helpers/renderToDom';

const renderFilter = () => {
  const content = `<div class="btn-group">
  <button class="sortBtn btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By...
  </button>
  <ul class="sort dropdown-menu">
  <li><a id="aToZ" class="sort dropdown-item" href="#"> A to Z</a></li>
  <li><a id="zToA" class="sort dropdown-item" href="#"> Z to A</a></li>
  <li><a id="newest" class="sort dropdown-item" href="#">Newest</a></li>
  <li><a id="oldest" class="sort dropdown-item" href="#">Oldest</a></li>
  </ul>
</div>`;
  renderToDom('#sort-div', content);
};

export default renderFilter;

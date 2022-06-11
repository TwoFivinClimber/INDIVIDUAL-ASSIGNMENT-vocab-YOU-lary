import renderToDom from '../../helpers/renderToDom';

const renderFooter = () => {
  const content = `<footer class="footer"><nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <span>This site is brought to you by <a href="https://github.com/TwoFivinClimber">Brett Hughes</a> and <a href="https://nashvillesoftwareschool.com/">Nashville Software School Cohort E-19</a>. With Special Instruction by <a href="https://github.com/drteresavasquez">Dr. Theresa Vasquez</a>. 06/2022 </span>
      </div>
    </div>
  </div>
</nav></footer>`;
  renderToDom('#footer', content);
};

export default renderFooter;

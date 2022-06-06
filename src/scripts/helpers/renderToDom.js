const renderToDom = (div, content) => {
  const selectedDiv = document.querySelector(div);
  selectedDiv.innerHTML = content;
};

export default renderToDom;

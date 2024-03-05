'use strict';

window.DRP.PreviousPageButton = function (root) {
  root.addEventListener('click', goBackInHistory);

  function goBackInHistory() {
    window.history.back();
  }
};

(function () {
  const previousPageButton = document.getElementById('previous-page-button');
  if (previousPageButton) {
    window.DRP.PreviousPageButton(previousPageButton);
  }

  const toBeLocalized = document.querySelectorAll('[data-localize]');
  for (const element of toBeLocalized) {
    window.DRP.localize(element);
  }

  const searchForm = document.querySelector('#search-form');
  if (searchForm) {
    window.DRP.SearchForm(searchForm);
  }
})();

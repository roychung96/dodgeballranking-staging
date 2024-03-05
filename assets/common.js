'use strict';

window.DRP = window.DRP || {};

window.DRP.Toggler = function (root) {
  root.mTarget = document.getElementById(root.getAttribute('aria-controls'));

  root.addEventListener('click', onClick);

  function onClick() {
    if (root.mTarget.getAttribute('aria-hidden') === 'true') {
      root.mTarget.setAttribute('aria-hidden', 'false');
      root.setAttribute('aria-expanded', 'true');
    } else {
      root.mTarget.setAttribute('aria-hidden', 'true');
      root.setAttribute('aria-expanded', 'false');
    }
  }
};

window.DRP.NavigationToggler = function (root) {
  window.DRP.Toggler(root);

  window.addEventListener('resize', updateAriaHidden);

  updateAriaHidden();

  function updateAriaHidden() {
    if (window.innerWidth >= 1024) {
      root.mTarget.setAttribute('aria-hidden', 'false');
      root.setAttribute('aria-expanded', 'true');
    } else {
      root.mTarget.setAttribute('aria-hidden', 'true');
      root.setAttribute('aria-expanded', 'false');
    }
  }
};

window.DRP.localize = function (root) {
  if (root.dataset.localize === "datetime") {
    const date = new Date(root.textContent);

    if (date && !isNaN(date)) {
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      root.textContent = `${year}-${month}-${day} ${hour}:${minute}`;
    }
  }
};

window.DRP.SearchForm = function (root) {
  for (const input of root.elements) {
    input.addEventListener('change', () => root.submit());
  }
};

(function () {
  const navigationButton = document.getElementById('navigation-button');
  if (navigationButton) {
    window.DRP.NavigationToggler(navigationButton);
  }
})();

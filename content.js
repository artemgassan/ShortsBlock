function hideShorts() {
  const shortsForMainPage = document.querySelectorAll('ytd-rich-section-renderer');
  const shortsSectionsForSearch = document.querySelectorAll('ytd-reel-shelf-renderer');

  shortsForMainPage.forEach(section => {
    if (section) {
      section.style.display = 'none';
    }
  });

  shortsSectionsForSearch.forEach(section => {
    if (section) {
      section.style.display = 'none';
    }
  });
}

window.addEventListener('load', hideShorts);

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

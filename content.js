function hideShorts() {
  const shortsSections = document.querySelectorAll('ytd-reel-shelf-renderer');

  shortsSections.forEach(section => {
    if (section) {
      section.style.display = 'none';
    }
  });
}

window.addEventListener('load', hideShorts);

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

// ==UserScript==
// @name         ShortsBlock
// @version      1.1.2
// @description  Simple browser extension that allows you to hide Shorts on a YouTube
// @author       artemgassan
// @license      MIT
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @match        *://*.youtubekids.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function hideShorts() {
  const selectors = {
    shortsForMainPage: 'ytd-rich-section-renderer',
    shortsSectionsForSearch: 'grid-shelf-view-model',
    shortsSectionsForHistory: 'ytd-reel-shelf-renderer',
  };

  Object.values(selectors).forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.style.display = 'none';
    });
  });

  const shortsNavButton = document.querySelector('a[title*="Shorts"]');
  if (shortsNavButton) {
    shortsNavButton.style.display = 'none';
  }
}

hideShorts();

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

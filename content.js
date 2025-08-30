// ==UserScript==
// @name         ShortsBlock
// @version      1.1.1
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
  const shortsForMainPage = document.querySelectorAll('ytd-rich-section-renderer');
  const shortsSectionsForSearch = document.querySelectorAll('grid-shelf-view-model');
  const buttonOpenShorts = document.querySelector('a[title*="Shorts"]')

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

  if (buttonOpenShorts) {
    buttonOpenShorts.style.display = 'none';
  }
}

hideShorts();

const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

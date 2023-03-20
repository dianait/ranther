import { loadingDiv } from './selectors.js';

export function showSpinner() {
    loadingDiv.style.visibility = 'visible';
  }
  
  export function hideSpinner() {
    loadingDiv.style.visibility = 'hidden';
  }
  
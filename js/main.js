import { openIARequest } from "./openia.js";
import { cohereRequest } from "./cohere.js";

const myButton = document.querySelector(".my-button");
const output = document.querySelector(".question");
const shareTwitter = document.querySelector(".share-twitter");
myButton.onclick = openIARequest;

var loadingDiv = document.getElementById('loading');

function showSpinner() {
  loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}

function getUrlShareTwitter(question) {
  const BASE_URL = "https://twitter.com/intent/tweet";
  const content = `?text=⭐️ New question ⭐️ 👉  ${question} Get another one at &url=https://ranther.vercel.app`;
  return BASE_URL + content;
} 

(() =>{
  shareTwitter.setAttribute("href", getUrlShareTwitter("Would you rather be a cat or a dog?"));
})();


import { openIARequest } from "./openia.js";
import { cohereRequest } from "./cohere.js";
import { getUrlShareTwitter } from "./share.js";
import { showSpinner, hideSpinner } from "./loading.js";
import { 

  generateButton, 
  openIAOutput, 
  cohereOutput, 
  shareTwitter, 
  openIATime, 
  cohereTime 

} from "./selectors.js";

(async () =>{
  generateButton.onclick = await getQuestion;
  shareTwitter.setAttribute("href", getUrlShareTwitter("Would you rather be a cat or a dog?"));
})();


async function  getQuestion() {
  showSpinner()
    let [openIAResult, cohereResult] = await Promise.all([openIARequest(), cohereRequest()]);
    openIAOutput.innerText = openIAResult.text;
    openIATime.innerText = ` (${openIAResult.seconds}s)`;
    cohereOutput.innerText = cohereResult.text.trim();
    cohereTime.innerText = ` (${cohereResult.seconds}s)`;
    shareTwitter.setAttribute("href", getUrlShareTwitter(cohereResult));
  hideSpinner()
}


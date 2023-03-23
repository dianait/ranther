import { openIARequest } from "./openia.js";
import { getUrlShareTwitter } from "./share.js";
import { showSpinner, hideSpinner } from "./loading.js";
import { 

  generateButton, 
  shareTwitter, 
  option1Button,
  option2Button,
  question,
  option1,
  option2

} from "./selectors.js";

(async () =>{
  generateButton.onclick = await getQuestion;
  setup("Would you rather be a cat 🐱 or a dog 🐶?")
})();


async function  getQuestion() {
  showSpinner()
    let openIAResult = await openIARequest();
    const currentQuestion = openIAResult.trim();
    setup(currentQuestion)
  hideSpinner()
}

function splitAnswer(quesiton) {
  let options = quesiton.split("Would you rather ")[1]
  let action = options.split(" ")[0]
  let option1 = options.split( " or ")[0].split(action)[1]
  let option2 = options.split( " or ")[1].slice(0, -1)
  return {option1, option2}
}

function setup(currentQuestion) {
  question.innerText = currentQuestion
  const answers = splitAnswer(currentQuestion)
  option1.innerText = answers.option1
  option2.innerText = answers.option2
  option1Button.setAttribute("value", answers.option1)
  option2Button.setAttribute("value", answers.option2)
  const answerSelected = document.querySelector('input[name=option]:checked').value;
  shareTwitter.setAttribute("href", getUrlShareTwitter(currentQuestion, answerSelected));
}
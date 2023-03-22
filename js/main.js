import { openIARequest } from "./openia.js";
import { getUrlShareTwitter } from "./share.js";
import { showSpinner, hideSpinner } from "./loading.js";
import { 

  generateButton, 
  openIAOutput, 
  shareTwitter, 
  option1Button,
  option2Button,
  question,
  option1,
  option2

} from "./selectors.js";

(async () =>{
  generateButton.onclick = await getQuestion;
  const exampleQuestion = "Would you rather be a cat 🐱 or a dog 🐶?"
  question.innerText = exampleQuestion
  const answers = splitAnswer(exampleQuestion)
  option1.innerText = answers.option1
  option2.innerText = answers.option2
  option1Button.setAttribute("value", answers.option1)
  option2Button.setAttribute("value", answers.option2)
  const answerSelected = document.querySelector('input[name=option]:checked').value;
  shareTwitter.setAttribute("href", getUrlShareTwitter(exampleQuestion, answerSelected));
})();


async function  getQuestion() {
  showSpinner()
    let openIAResult = await openIARequest();
    const question = openIAResult.trim();
    openIAOutput.innerText = question;
    const answers = splitAnswer(question)
    option1.innerText = answers.option1
    option2.innerText = answers.option2
    shareTwitter.setAttribute("href", getUrlShareTwitter(openIAResult.text));
  hideSpinner()
}

function splitAnswer(quesiton) {
  let options = quesiton.split("Would you rather ")[1]
  let action = options.split(" ")[0]
  let option1 = options.split( " or ")[0].split(action)[1]
  let option2 = options.split( " or ")[1].slice(0, -1)
  return {option1, option2}
}

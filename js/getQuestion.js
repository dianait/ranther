import { ENDPOINT, API } from '../config/cohere.js'

const myButton = document.querySelector(".my-button");
const output = document.querySelector(".question");
myButton.onclick = getQuestion;

var loadingDiv = document.getElementById('loading');

function showSpinner() {
  loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}

async function getQuestion() {
  showSpinner()
  const data = {
    model: 'command-xlarge-nightly',
    prompt: `Generate a single "Would You Rather" question for a informal meeting in order to know us each other a little better without being too personal. Generate only the question, not the answer.`,
    max_tokens: 182,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${API}`,
      "Content-Type": 'application/json',
      "Cohere-Version": '2022-12-06'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const { text } = response.generations[0]
  hideSpinner()
  output.innerText = text.trim()
}
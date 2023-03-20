
import { COHERE } from '../config/keys.js'

export async function cohereRequest() {
    showSpinner()
    const data = {
      model: 'command-xlarge-nightly',
      prompt: COHERE.prompt,
      max_tokens: 182,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      stop_sequences: ['--'],
      return_likelihoods: 'NONE'
    }
  
    const response = await fetch(COHERE.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `BEARER ${COHERE.api}`,
        "Content-Type": 'application/json',
        "Cohere-Version": '2022-12-06'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  
    const { text } = response.generations[0]
    hideSpinner()
    shareTwitter.setAttribute("href", getUrlShareTwitter(text.trim()));
    output.innerText = text.trim()
  }
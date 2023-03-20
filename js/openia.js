import { OPENIA } from '../config/keys.js'

export async function openIARequest() {
    showSpinner()
    const data = {
      model: 'text-davinci-003',
      prompt: OPENIA.prompt,
      temperature: 0.9,
      max_tokens: 182,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.75,
      stop: ['--']
    }
  
    const response = await fetch(OPENIA.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENIA.api}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  
  const text = response.choices[0].text.trim()
    hideSpinner()
    shareTwitter.setAttribute("href", getUrlShareTwitter(text));
    output.innerText = text
  }
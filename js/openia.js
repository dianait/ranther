import { OPENIA, COHERE } from '../config/keys.js'

export async function openIARequest() {
    const start = performance.now();
    const data = {
      model: 'text-davinci-003',
      prompt: COHERE.prompt,
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
  const timeTaken = performance.now() - start;
  const seconds = ((timeTaken % 60000) / 1000).toFixed(3);
  console.log(`OpenIA has taken: ${seconds}`)
  return {text, seconds}
  }
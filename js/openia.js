import { OPENIA } from '../config/keys.js'

export async function openIARequest() {
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "user",
          content: OPENIA.prompt
        }
      ],
      temperature: 0.9,
      max_tokens: 182,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.75
    }
  
    const response = await fetch(OPENIA.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENIA.api}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())

  const text = response.choices[0].message.content
  return text
  }
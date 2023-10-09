// declartions
const url = 'https://chatgpt-api7.p.rapidapi.com/ask';

const inputEl = document.querySelector('.inputEl') as HTMLInputElement;
const btnGenerate = document.querySelector('.btnGenerate') as HTMLButtonElement;
const responseEl = document.querySelector(
  '.responseEl'
) as HTMLParagraphElement;

async function generateResponse(question: string) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'YOUR_API_KEY',
      'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com',
    },
    body: JSON.stringify({
      query: question,
    }),
  };

  const res = await fetch(url, options);
  const data = await res.json();

  if (data.response) {
    responseEl.textContent = data.response;
  } else {
    responseEl.textContent = 'Failed to load the response.';
  }
}

// events

btnGenerate.addEventListener('click', () => {
  const inputValue = inputEl.value.trim();

  if (inputValue.length < 1) {
    alert('You need to enter a question.');
  } else {
    responseEl.textContent = 'Generating your response...';
    generateResponse(inputValue);
  }
});

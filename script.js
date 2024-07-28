const jokeContainer = document.getElementById('jokeContainer');
const generateJokeBtn = document.getElementById('generateJokeBtn');

generateJokeBtn.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
    .then(response => response.json())
    .then(data => {
      const joke = data.type === 'single' ? data.joke : `${data.setup}<br>${data.delivery}`;
      jokeContainer.innerHTML = `<p id="jokeText">${joke}</p>`;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      jokeContainer.innerHTML = `<p id="jokeText">Oops! Something went wrong. Please try again later.</p>`;
    });
});

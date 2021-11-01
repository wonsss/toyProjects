const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// Using Async/Await - 현대에서 더 선호된다

async function generateJoke() {
  const config = { headers: { Accept: 'application/json' } };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// 위 함수 코드와 동일한 효과 - Using .then()
// function generateJoke() {
//   const config = { headers: { Accept: 'application/json' } };
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

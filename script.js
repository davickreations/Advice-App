const adviceId = document.getElementsByClassName('id')[0];
const advice = document.getElementsByClassName('advice')[0];
const circle = document.querySelector('.circle');

    
function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;

    circle.classList.add('active');

    setTimeout(() => {
        circle.classList.remove('active');
    }, 40000);
  });
}

fetchAdvice();

setInterval(fetchAdvice, 60000)
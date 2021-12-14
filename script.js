const rgbColor = document.querySelector('#rgb-color');
const divContainer = document.querySelector('#div-container');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
function geradorNumeros() {
  const numero1 = Math.floor(Math.random() * 255);
  const numero2 = Math.floor(Math.random() * 255);
  const numero3 = Math.floor(Math.random() * 255);
  const cor = `(${numero1}, ${numero2}, ${numero3})`;
  return cor;
}
function geradorTexto() {
  const cor = geradorNumeros();
  rgbColor.innerText = cor;
}
function geradorCirculo() {
  const quant = 6;
  for (let i = 0; i < quant; i += 1) {
    const circulo = document.createElement('div');
    circulo.className = 'ball';
    divContainer.appendChild(circulo);
  }
}
function criaCores() {
  const resposta = rgbColor.innerText;
  const ball = document.querySelectorAll('.ball');
  const seletor = Math.floor(Math.random() * 5);
  for (let i = 0; i < ball.length; i += 1) {
    const cor = geradorNumeros();
    ball[i].style.backgroundColor = `rgb${cor}`;
  }
  ball[seletor].classList.add('correto');
  ball[seletor].style.backgroundColor = `rgb${resposta}`;
}
function criaResposta(event) {
  const evt = event.target;
  if (evt !== divContainer) {
    if (evt.classList.contains('correto') === true) {
      answer.innerText = 'Acertou!';
      score.innerText = parseInt(score.innerText, 10) + 3;
    }
    if (evt.classList.contains('correto') === false) {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}
function resetaTexto() {
  answer.innerText = 'Escolha uma cor';
}
function resetaResposta() {
  const resposta = document.querySelector('.correto');
  resposta.classList.remove('correto');
}
function geraPlacar() {
  score.innerText = 0;
}
divContainer.addEventListener('click', criaResposta);
resetGame.addEventListener('click', resetaResposta);
resetGame.addEventListener('click', geradorTexto);
resetGame.addEventListener('click', criaCores);
resetGame.addEventListener('click', resetaTexto);
window.addEventListener('load', geradorTexto);
window.addEventListener('load', geradorCirculo);
window.addEventListener('load', criaCores);
window.addEventListener('load', geraPlacar);

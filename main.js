import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {counterStore, increment, decrement} from './src/store/counter'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    <button id="decrement" type="button">-</button>
    <span id="counter">0</span>
    <button id="increment" type="button">+</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const countElement = document.getElementById('counter')
const incBtnElement = document.getElementById('increment')
const decBtnElement = document.getElementById('decrement')

counterStore.subscribe(() => {
  countElement.innerHTML = counterStore.getState()
})

incBtnElement.addEventListener("click", () => counterStore.dispatch(increment()))
decBtnElement.addEventListener("click", () => counterStore.dispatch(decrement()))
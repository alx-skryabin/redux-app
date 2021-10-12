import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from './redux/rootReducer'
import {asyncIncrement, changeTheme, decrement, increment} from './redux/actions'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// native Middleware - logger
// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log('Prev state: ', state.getState())
//       console.log('Action: ', action)
//       const result = next(action)
//       console.log('New state: ', state.getState())
//       return result
//     }
//   }
// }

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
    ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state.counter.toString()
  document.body.className = state.theme.value;

  [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  })
})

// initialization and processing default state APP
store.dispatch({type: 'INIT_APP'})

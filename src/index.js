import {createStore} from './createStore'
import {rootReducer} from './redux/rootReducer'
import {decrement, increment} from './redux/actions'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})

store.subscribe(() => {
  counter.textContent = store.getState()
})

// initialization and processing default state APP
store.dispatch({type: 'INIT_APP'})

import {DECREMENT, INCREMENT} from './types'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  // Middleware for async operations
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 2000)
  }
}

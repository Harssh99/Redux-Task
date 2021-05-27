import { createStore } from 'redux'
import counterReducer from './counter/counterReducer'

const Store = createStore(counterReducer)

export default Store

import {createStore} from 'redux'
import songsReducer from './reducer/songsReducer'

const store = createStore(songsReducer);

export default store
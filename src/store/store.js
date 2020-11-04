import {createStore} from 'redux'
import {combineReducers} from 'redux'


import postReducer from './reducers/index'

const rootReducer = combineReducers({
    Posts : postReducer
})

const Store = createStore(rootReducer);

export default Store
import {combineReducers} from 'redux'
import {user} from './redux/user-redux'
import {chartUser} from './redux/chartuser-redux'

export default combineReducers({user, chartUser})
import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';

const combReducer = combineReducers({
    movies:movieReducer,
    favorite:favoriteReducer
})

export default combReducer;
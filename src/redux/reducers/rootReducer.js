import { combineReducers } from 'redux';
import movies from '../../modules/movies/reducers/moviesReducer';
import movieDetail from '../../modules/movies/reducers/moviesDetailReducer';

const appReducer =  combineReducers({
    movies,
    movieDetail
});

const rootReducer = ( state, action ) => {
    //handle a global action such as logout etc

    // dispatch the event to other reducers
    return appReducer(state, action)
}

export default rootReducer;



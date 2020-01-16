import { 
    FETCHING_MOVIES_LIST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILED
} from '../actions/moviesActionTypes';

const INITIAL_STATE = {
    fetchingMovies: false,
    moviesList: [],
    error: null
}

export default ((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_MOVIES_LIST:
            return { ...state, fetchingMovies: true };
        case FETCH_MOVIES_SUCCESS:
            return { ...state, moviesList: action.payload, fetchingMovies: false };
        case FETCH_MOVIES_FAILED:
            return { ...state, error: action.payload, fetchingMovies: false };
        default:
            return state;
    }
})
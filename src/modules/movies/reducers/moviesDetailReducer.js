import { 
    FETCHING_MOVIE_DETAIL,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILED
} from '../actions/moviesActionTypes';

const INITIAL_STATE = {
    fetchingDetail: false,
    movieData: {},
    error: null
}

export default ((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_MOVIE_DETAIL:
            return { ...state, fetchingDetail: true };
        case FETCH_MOVIE_DETAIL_SUCCESS:
            return { ...state, movieData: action.payload, fetchingDetail: false };
        case FETCH_MOVIE_DETAIL_FAILED:
            return { ...state, error: action.payload, fetchingDetail: false };
        default:
            return state;
    }
})
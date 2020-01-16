import { 
    FETCHING_MOVIES_LIST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILED
} from './moviesActionTypes';

import {
    fetchPopularMovies,
} from './movies';

export const getPopularMovies = (() => {
    
    return dispatch => {
        
        fetchingPopularMovies(dispatch);
        fetchPopularMovies()
        .then((response) => {
            fetchMoviesSuccess(dispatch, response);
        })
        .catch((error) => {
            fetchMoviesFailed(dispatch, error);
        })
    }
});

export const fetchingPopularMovies = ((dispatch) => {
    
    dispatch({
        type: FETCHING_MOVIES_LIST
    });
});

export const fetchMoviesSuccess = ((dispatch, movies) => {

    dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    });
});

export const fetchMoviesFailed = ((dispatch, error) => {

    dispatch({
        type: FETCH_MOVIES_FAILED,
        payload: error
    });
});
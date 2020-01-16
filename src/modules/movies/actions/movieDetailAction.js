import { 
    FETCHING_MOVIE_DETAIL,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILED
} from './moviesActionTypes';

import {
    fetchMovieDetail
} from './movies';

export const getMovieDetail = ((movieId) => {
    
    return dispatch => {
        fetchingMovieDetail(dispatch);
        fetchMovieDetail(movieId)
        .then((response) => {
            fetchMovieDetailSuccess(dispatch, response);
        })
        .catch((error) => {
            fetchMovieDetailFailed(dispatch, error);
        })
    }
});

export const fetchingMovieDetail = ((dispatch) => {
    
    dispatch({
        type: FETCHING_MOVIE_DETAIL
    });
});

export const fetchMovieDetailSuccess = ((dispatch, movieDetail) => {
    
    dispatch({
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        payload: movieDetail
    });
});

export const fetchMovieDetailFailed = ((dispatch, error) => {
    
    dispatch({
        type: FETCH_MOVIE_DETAIL_FAILED,
        payload: error
    });
});
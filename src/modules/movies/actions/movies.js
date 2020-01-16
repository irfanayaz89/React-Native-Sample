import { GET } from "../../../network/api";

export const fetchPopularMovies = (() => {

    return new Promise((resolve, reject) => {
        GET("/movie/popular")
        .then((response) => {
            console.log(response);
            resolve(response.results);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    });
});

export const fetchMovieDetail = ((movieId) => {

    return new Promise((resolve, reject) => {
        let url = "/movie/" + movieId; //419704
        GET(url)
        .then((response) => {
            console.log(response);
            resolve(response);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    })
});
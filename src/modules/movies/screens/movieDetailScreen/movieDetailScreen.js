import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import Star from 'react-native-star-view';

import { connect } from "react-redux";

import { getMovieDetail } from '../../actions';

import { IMAGE_BASE_URL } from '../../../../shared/constants';
import Button from '../../components/Button';

import PairView from '../../components/PairView/PairView';
import { ScrollView } from 'react-native-gesture-handler';

import Styles from "./styles";

class MovieDetailScreen extends Component {

    componentDidMount() {

        this.props.getMovieDetail(this.props.navigation.state.params.movieId);
    }

    render() {

        const { fetchingDetail, movieData} = this.props;

        if (fetchingDetail) {
            return this.showLoadingView();
        }

        let imgUrl = {
            uri: IMAGE_BASE_URL + movieData.poster_path
        }

        let rating = (movieData.vote_average / 10) * 5;
        
        return (
            <View style={Styles.container}>

                <Image style={Styles.coverImage} source={imgUrl} resizeMode='cover'></Image>

                <ScrollView>
                    <View style={Styles.bottomContainer}>
                        <Text style={Styles.title}>{movieData.original_title}</Text>
                        <View style={Styles.ratingContainer}>
                            <Button
                                buttonStyle={Styles.trailerButtonStyle} textStyle={Styles.btnTxtStyle} title="TRAILER" />
                            <Star score={rating} />
                            <Text style={Styles.voteCount}>{"(" + movieData.vote_count + ")"}</Text>
                        </View>
                        <Text style={Styles.description} >{movieData.overview}</Text>
                        
                        <PairView
                            title="Production"
                            // accumalting all the companies into one string
                            value={movieData.production_companies && movieData.production_companies.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            title="Genre"
                            // accumalting all the companies into one string
                            value={movieData.genres && movieData.genres.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            title="Countries"
                            // accumalting all the companies into one string
                            value={movieData.production_countries && movieData.production_countries.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            title="Spoken Languages"
                            // accumalting all the companies into one string
                            value={movieData.spoken_languages && movieData.spoken_languages.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            title="Budget"
                            // accumalting all the companies into one string
                            value={movieData.budget} />

                        <PairView
                            title="Revenue"
                            // accumalting all the companies into one string
                            value={movieData.revenue} />

                        <PairView
                            title="Release Date"
                            // accumalting all the companies into one string
                            value={movieData.release_date} />

                        <PairView
                            title="Run Time"
                            // accumalting all the companies into one string
                            value={movieData.runtime + " min"} />
                    </View>
                </ScrollView>

            </View>
        );
    }

    showLoadingView() {

        return (
            <View style={[Styles.container, Styles.centerChildren]}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }
}


MovieDetailScreen.defaultProps = {
    movieData: {},
    error: null,
    fetchingDetail: true
}

function mapStateToProps(state) {

    const { movieDetail } = state;
    const { fetchingDetail, movieData, error } = movieDetail;
    return { fetchingDetail, movieData, error };
}

function mapDispatchToProps(dispatch) {

    return {
        getMovieDetail: (movieId) => dispatch(getMovieDetail(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreen);
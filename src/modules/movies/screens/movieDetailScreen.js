import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from "react-redux";

import { getMovieDetail } from '../actions';

class MovieDetailScreen extends Component {

    componentDidMount() {
        
        this.props.getMovieDetail('419704');
    }

    componentDidUpdate(prevProps) {

        const { fetchingDetail, movieData, error } = this.props;
        console.log("FETCHING DETAIL:: " + fetchingDetail);
        console.log("MOVIE DATA:: " + movieData);
        console.log("ERROR:: " + error);
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#962938', alignItems: 'center', 'justifyContent': 'center'}}>
                <Text style={{color: '#2f2f2f', fontSize: 20, fontWeight: 'bold'}}>Movie Detail Screen</Text>
            </View>
        );
    }
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
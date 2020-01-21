import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from "react-redux";

import { getPopularMovies } from '../actions';

class MoviesScreen extends Component {

    componentDidMount() {
        
        this.props.getPopularMovies();
    }

    componentDidUpdate() {

        const { fetchingMovies, moviesList, error } = this.props;
        console.log("FETCHING MOVIES:: " + fetchingMovies);
        console.log("MOVIES:: " + moviesList);
        console.log("ERROR:: " + error);
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#962938', alignItems: 'center', 'justifyContent': 'center'}}>
                <Text style={{color: '#2f2f2f', fontSize: 20, fontWeight: 'bold'}}>Movies List</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {

    const { movies } = state;
    const { fetchingMovies, moviesList, error } = movies;
    return { fetchingMovies, moviesList, error };
}

function mapDispatchToProps(dispatch) {

    return {
        getPopularMovies: () => dispatch(getPopularMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';

import { connect } from "react-redux";

import { getPopularMovies } from '../../actions';
import MovieItem from '../../components/MovieItem/movieItem';
import { FlatList } from 'react-native-gesture-handler';

import Styles from './style'

class MoviesScreen extends Component {

    constructor(props) {

        super(props)

        this.navigateToDetailView = this.navigateToDetailView.bind(this);
        this.getItem = this.getItem.bind(this)
    }

    componentDidMount() {

        this.props.getPopularMovies();
    }

    render() {

        return (
            <SafeAreaView style={[Styles.container, Styles.padding]}>
                <View style={[Styles.titleBar]} >
                    <Text style={[{ color: '#1F64E1'}, Styles.movieText]}>Tin<Text style={{ color: 'white' }}>Movies</Text></Text>
                </View>
                <FlatList style={[Styles.container, Styles.listStyles]}
                    data={this.props.moviesList}
                    renderItem={({item, index}) => this.getItem(item, index)}
                    numColumns={2}>
                </FlatList>
            </SafeAreaView>
        );
    }

    navigateToDetailView(index) {
        this.props.navigation.navigate('MovieDetail', {
            movieId: this.props.moviesList[index].id
        })
    }

    getItem(item, index) {
        return (
            <MovieItem item={item} index={index} navigate={this.navigateToDetailView} />
        )
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
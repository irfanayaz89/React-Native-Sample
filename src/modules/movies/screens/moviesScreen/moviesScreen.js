import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from "react-redux";

import { getPopularMovies } from '../../actions';
import MovieItem from '../../components/MovieItem/movieItem';
import { FlatList } from 'react-native-gesture-handler';

import AppStyles from '../../../../theme/styles'
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

    componentDidUpdate() {

        const { fetchingMovies, moviesList, error } = this.props;
        console.log("FETCHING MOVIES:: " + fetchingMovies);
        console.log("MOVIES:: " + moviesList);
        console.log("ERROR:: " + error);
    }

    render() {

        return (
            <View style={[Styles.container]}>
                <View style={[Styles.titleBar]} >
                    <Text style={{ color: '#1F64E1', fontSize: 20, fontWeight: 'bold' }} >Tin</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Movies</Text>
                </View>
                <FlatList style={{ flex: 1, backgroundColor: 'black', marginTop: 2 }}
                    data={this.props.moviesList}
                    renderItem={(item) => this.getItem(item)}
                    numColumns={2}>

                </FlatList>
            </View>
        );
    }

    navigateToDetailView(index) {
        this.props.navigation.navigate('MovieDetail', {
            movieId: this.props.moviesList[index].id
        })
    }

    getItem(item) {
        return (
            <MovieItem item={item} navigate={this.navigateToDetailView} />
            // <Text style={{ color: 'white' }} >Hello</Text>
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
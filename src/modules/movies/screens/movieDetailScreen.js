import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import Star from 'react-native-star-view';

import { connect } from "react-redux";

import { getMovieDetail } from '../actions';

import { IMAGE_BASE_URL } from '../../../shared/constants';
import Button from '../views/MyButton';

import PairView from '../views/PairView';
import { ScrollView } from 'react-native-gesture-handler';

import MoviesStyles from "../styles";

class MovieDetailScreen extends Component {

    componentDidMount() {

        this.props.getMovieDetail(this.props.navigation.state.params.movieId);
    }

    componentDidUpdate(prevProps) {

        const { fetchingDetail, movieData, error } = this.props;
        console.log("FETCHING DETAIL:: " + fetchingDetail);
        console.log("MOVIE DATA:: " + movieData);
        console.log("ERROR:: " + error);
    }

    render() {

        let imgUrl = {
            uri: IMAGE_BASE_URL + this.props.movieData.poster_path
        }

        let rating = (this.props.movieData.vote_average / 10) * 5

        return (
            <View style={MoviesStyles.movieDetailContainer}>

                <Image style={MoviesStyles.image} source={imgUrl} resizeMode='cover'></Image>

                <ScrollView>
                    <View style={MoviesStyles.bottomContainer}>
                        <Text style={MoviesStyles.title}>{this.props.movieData.original_title}</Text>
                        <View style={MoviesStyles.ratingContainer} >
                            <Button
                                buttonStyle={MoviesStyles.trailerButtonStyle} textStyle={{ color: 'white', fontWeight: 'bold' }} title="TRAILER" />
                            <Star score={rating} />
                            <Text style={{ alignSelf: 'center', color: 'grey' }}>{"(" + this.props.movieData.vote_count + ")"}</Text>
                        </View>
                        <Text style={MoviesStyles.description} >{this.props.movieData.overview}</Text>
                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Production"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.production_companies.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Genre"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.genres.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Countries"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.production_countries.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Spoken Languages"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.spoken_languages.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Budget"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.budget} />



                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Revenue"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.revenue} />


                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Release Date"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.release_date} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Run Time"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.runtime + " min"} />


                    </View>
                </ScrollView>

            </View>
        );
    }
}





// const styles = StyleSheet.create({

// movieDetailContainer: {
//     flex: 1,
//     backgroundColor: '#273546',
// },
// trailerButtonStyle: {
//     borderRadius: 10,
//     backgroundColor: '#6B7380',
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
// },
// bottomContainer: {
//     flex: 1,
//     padding: 15,
// },
// ratingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15
// },
// image: {
//     height: height * 0.40,
//     width: '100%',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,

// },
// title: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginTop: 10,
//     color: 'white'
// },
// description: {
//     color: '#7A838C',
//     fontSize: 16,
//     marginTop: 15,
// }

// })




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
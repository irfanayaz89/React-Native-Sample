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
import Button from '../../components/TinMoviesButton';

import PairView from '../../components/PairView/PairView';
import { ScrollView } from 'react-native-gesture-handler';

import Styles from "./styles";

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

        if (this.props.fetchingDetail) {
            return this.showLoadingView();
        }

        let imgUrl = this.props.movieData.poster_path
        // if (!this.props.movieData.poster_path.includes("http")) {

        imgUrl = {
            uri: IMAGE_BASE_URL + this.props.movieData.poster_path
        }
        // }

        let rating = (this.props.movieData.vote_average / 10) * 5
        const { movieData } = this.props
        return (
            <View style={Styles.movieDetailContainer}>

                <Image style={Styles.image} source={imgUrl} resizeMode='cover'></Image>

                <ScrollView>
                    <View style={Styles.bottomContainer}>
                        <Text style={Styles.title}>{this.props.movieData.original_title}</Text>
                        <View style={Styles.ratingContainer} >
                            <Button
                                buttonStyle={Styles.trailerButtonStyle} textStyle={{ color: 'white', fontWeight: 'bold' }} title="TRAILER" />
                            <Star score={rating} />
                            <Text style={{ alignSelf: 'center', color: 'grey' }}>{"(" + this.props.movieData.vote_count + ")"}</Text>
                        </View>
                        <Text style={Styles.description} >{this.props.movieData.overview}</Text>
                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Production"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.production_companies && this.props.movieData.production_companies.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Genre"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.genres && this.props.movieData.genres.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Countries"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.production_countries && this.props.movieData.production_countries.reduce((accum, current) => {
                                return (current.name + " " + accum);
                            }, "")} />

                        <PairView
                            style={{ marginTop: 10 }}
                            valueStyle={{ color: '#7A838C', fontSize: 14, }}
                            title={"Spoken Languages"}
                            // accumalting all the companies into one string
                            value={this.props.movieData.spoken_languages && this.props.movieData.spoken_languages.reduce((accum, current) => {
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

    showLoadingView() {

        return (
            <View style={[Styles.movieDetailContainer, {justifyContent: "center"}]}>
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
// "adult": false,
// "backdrop_path": "https://via.placeholder.com/300",
// "belongs_to_collection": null,
// "budget": 0,
// "genres": [],
// "poster_path": "",
// "homepage": "https://www.imdb.com/",
// "original_language": "en",
// "original_title": "Title",
// "overview": "Description",
// "popularity": 0,
// "poster_path": "",
// "production_companies": [{
//     "id": 0,
//     "name": ""
// }],
// "production_countries": [
//     {
//         "id": 0,
//         "name": ""
//     }
// ],
// "release_date": "",
// "revenue": 0,
// "runtime": 0,
// "spoken_languages": [
//     {
//         "iso_639_1": "",
//         "name": ""
//     }],
// "status": "",
// "tagline": "",
// "title": "",
// "video": false,
// "vote_average": 0,
// "vote_count": 0
// }
// }



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
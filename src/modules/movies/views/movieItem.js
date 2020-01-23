import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity} from 'react-native'

import RatingWithText from './ratingWithTextView'

import { IMAGE_BASE_URL } from '../../../shared/constants'

import MoviesStyles from '../styles'

class MovieItem extends Component {


    constructor(props){
        super(props)
        this.onItemPress = this.onItemPress.bind(this)
    }


    onItemPress() {
        this.props.navigate(this.props.item.index)
    }


    render() {

        let height = this.getItemHeght(this.props.item.index)

        let imgUrl = {
            uri: IMAGE_BASE_URL + this.props.item.item.backdrop_path
        }

        let vote_average = this.props.item.item.vote_average


        return (

            <View style={[MoviesStyles.movieItemContainer, this.props.style, { height: height }]}>
                <TouchableOpacity
                    onPress={this.onItemPress}>
                    <View>
                        <Image style={MoviesStyles.imageStyle} source={imgUrl} resizeMode='cover' />
                        <View style={MoviesStyles.innerView} >
                            <RatingWithText style={MoviesStyles.ratingStyle} vote_average={vote_average} />
                            <Text style={MoviesStyles.movieNameStyle} >{this.props.item.item.original_title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    getItemHeght = (index) => {
        switch (index % 3) {
            case 0:
                return 300;
            case 1:
                return 300;
            case 2:
                return 300;
            default:
                return 200;
        }
    }

}

// const styles = StyleSheet.create({

//     movieItemContainer: {
//         width: 0.5 * width,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//     },
//     imageStyle: {
//         height: '100%',
//         width: '100%',
//         borderWidth: 2,
//         borderColor: 'white'
//     },
//     movieNameStyle: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginStart: 5,
//         marginBottom: 5,
//         color: 'rgba(250,250,250,0.7)',
//     },

//     ratingStyle: {
//         marginBottom: 20,
//         marginStart: 5,
//         color: 'rgba(250,250,250,0.7)',
//     },
//     innerView: {
//         position: 'absolute',
//         left: 0,
//         bottom: 0
//     }

// })

export default MovieItem;
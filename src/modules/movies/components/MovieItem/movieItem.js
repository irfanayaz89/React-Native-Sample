import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import RatingWithText from '../RatingWithTextView/ratingWithTextView'

import { IMAGE_BASE_URL } from '../../../../shared/constants'

import Styles from './style'

class MovieItem extends Component {

    constructor(props) {
        super(props)
        this.onItemPress = this.onItemPress.bind(this)
    }

    onItemPress() {
        this.props.navigate(this.props.item.index)
    }

    render() {

        const { item } = this.props;

        let height = this.getItemHeight(item.index)

        let imgUrl = {
            uri: (item.item != null && item.item.backdrop_path != null) ? IMAGE_BASE_URL + item.item.backdrop_path : "https://placeholder.com/"
        }

        let vote_average = item.item.vote_average

        return (

            <View style={[Styles.container, this.props.style, { height: height }]}>
                <TouchableOpacity
                    onPress={this.onItemPress}>
                    <View>
                        <Image style={Styles.imageStyle} source={imgUrl} resizeMode='cover' />
                        <View style={Styles.innerView} >
                            <RatingWithText style={Styles.ratingStyle} vote_average={vote_average} />
                            <Text style={Styles.movieNameStyle} >{this.props.item.item.original_title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    getItemHeight = (index) => {
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

// MovieItem.defaultProps = {
//     item: {
//         imgUrl: "https://placeholder.com/",
//         original_title: "Movie Title"
//     }
// }

export default MovieItem;
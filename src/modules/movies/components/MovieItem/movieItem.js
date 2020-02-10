import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import RatingWithText from '../RatingWithTextView/ratingWithTextView'

import { IMAGE_BASE_URL } from '../../../../shared/constants'

import Styles from './style'
import PropTypes from 'prop-types';


class MovieItem extends Component {

    constructor(props) {
        super(props)
        this.onItemPress = this.onItemPress.bind(this)
    }

    onItemPress() {
        this.props.navigate(this.props.index)
    }

    render() {

        const { item, index } = this.props;

        let height = this.getItemHeight(index)

        let imgUrl = {
            uri: (item != null) ? IMAGE_BASE_URL + item.backdrop_path : "https://placeholder.com/"
        }

        let itemName = item != null ? item.original_title : "Movie Name"
        let vote_average = item != null ? item.vote_average : 0

        return (

            <View style={[Styles.container, this.props.style, { height: height }]}>
                <TouchableOpacity
                    onPress={this.onItemPress}>
                    <View>
                        <Image style={Styles.imageStyle} source={imgUrl} resizeMode='cover' />
                        <View style={Styles.innerView} >
                            <RatingWithText style={Styles.ratingStyle} vote_average={vote_average} />
                            <Text style={Styles.movieNameStyle} >{itemName}</Text>
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

MovieItem.defaultProps = {
    item: {
        imgUrl: "https://placeholder.com/",
        original_title: "Movie Title"
    }, index: 0
}

MovieItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default MovieItem;
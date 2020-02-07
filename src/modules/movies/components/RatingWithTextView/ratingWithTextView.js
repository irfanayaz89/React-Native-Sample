import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Styles from './style';

const RatingWithText = (props) => {

        let rating = props.vote_average
        return(
            <View style={[Styles.ratingWithTextContainer, props.style]}>
                <Image style={Styles.star} source={require('../../../../assets/icons/star.png')} />
                <Text style={Styles.text} >{rating}/10</Text>
            </View>
        );
}


export default RatingWithText;


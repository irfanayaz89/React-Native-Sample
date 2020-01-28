import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Styles from './style'



class RatingWithText extends Component {

    render() {

        let rating = this.props.vote_average


        return (<View style={[Styles.ratingWithTextContainer, this.props.style]}>
            <Image style={Styles.star} source={require('../../../../assets/icons/star.png')} />
            <Text style={Styles.text} >{rating}/10</Text>
        </View>
        );
    }

}




// const styles = StyleSheet.create({
// ratingWithTextContainer: {
//     flexDirection: 'row',
//     height: 20,
//     width: 85,
// },
// star: {
//     height: 20,
//     width: 20,
//     marginEnd: 5,
//     marginTop: 10,
// },
// text: {
//     height: 20,
//     marginEnd: 5,
//     marginTop: 10,
//     color: 'grey'
// }
// })


export default RatingWithText


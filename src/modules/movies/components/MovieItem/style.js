import { StyleSheet } from 'react-native'

import {width} from '../../../../theme/styles/style'
//movie item style
const Styles = StyleSheet.create({

    container: {
        width: 0.5 * width,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white'
    },
    movieNameStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginStart: 5,
        marginBottom: 5,
        color: 'rgba(250,250,250,0.7)',
    },

    ratingStyle: {
        marginBottom: 20,
        marginStart: 5,
        color: 'rgba(250,250,250,0.7)',
    },
    innerView: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5
    },
});

export default Styles;
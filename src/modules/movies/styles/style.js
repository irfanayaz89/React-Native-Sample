import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default MoviesStyles = StyleSheet.create({

    //rating with text container
    ratingWithTextContainer: {
        flexDirection: 'row',
        height: 20,
        width: 85,
    },
    star: {
        height: 20,
        width: 20,
        marginEnd: 5,
        marginTop: 10,
    },
    text: {
        height: 20,
        marginEnd: 5,
        marginTop: 10,
        color: 'grey'
    },

    //movie Item container


    movieItemContainer: {
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
        bottom: 0
    },
    movieDetailContainer: {
        flex: 1,
        backgroundColor: '#273546',
    },
    trailerButtonStyle: {
        borderRadius: 10,
        backgroundColor: '#6B7380',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    bottomContainer: {
        flex: 1,
        padding: 15,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    image: {
        height: height * 0.40,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        color: 'white'
    },
    description: {
        color: '#7A838C',
        fontSize: 16,
        marginTop: 15,
    },

});

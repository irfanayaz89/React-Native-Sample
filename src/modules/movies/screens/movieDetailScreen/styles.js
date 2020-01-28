import { StyleSheet } from 'react-native'
import { height } from '../../../../theme/styles/style'

import AppStyles from '../../../../theme/styles'

export default Styles = StyleSheet.create({


    movieDetailContainer: {
        ...AppStyles.appContainer
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
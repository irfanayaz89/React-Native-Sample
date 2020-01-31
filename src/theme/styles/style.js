import { StyleSheet, Dimensions } from 'react-native'

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;

export default Styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    appContainer: {
        flex:1,
        backgroundColor: '#08090B',
    },
    centerChildren: {
        justifyContent: 'center',
        alignItems: 'center'
    },

});

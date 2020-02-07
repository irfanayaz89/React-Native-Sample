import { StyleSheet } from 'react-native'
import AppStyles from '../../../../theme/styles'

export default Styles = StyleSheet.create({

    container: {
        ...AppStyles.appContainer,
    },
    padding: {
        padding: 5
    },
    titleBar: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#454545',
        borderRadius: 10, padding: 10
    },
    listStyles: {
        backgroundColor: 'black', 
        marginTop: 2
    }
});

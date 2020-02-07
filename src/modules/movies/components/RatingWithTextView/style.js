import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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
})

export default Styles;
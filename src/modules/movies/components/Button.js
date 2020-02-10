import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const Button = ((props) => {
    
    return (
        <TouchableHighlight
            onPress={props.onClick}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.title}</Text>
            </View>

        </TouchableHighlight>
    )
});

Button.defaultProps = {
    title: '',
}

Button.propTypes = {
    title: PropTypes.string.isRequired
}


export default Button
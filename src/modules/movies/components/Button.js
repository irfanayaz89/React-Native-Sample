import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

const Button = (props) => {
    
    return (
        <TouchableHighlight
            onPress={props.onClick}>
            <View style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.title}</Text>
            </View>

        </TouchableHighlight>
    )
}


export default Button
import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onClick}>
                <View style={this.props.buttonStyle}>
                    <Text style={this.props.textStyle}>{this.props.title}</Text>
                </View>

            </TouchableNativeFeedback>
        )
    }
}


export default Button
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Styles from './styles'

class PairView extends Component {

    render() {
        return (
            <View style={[Styles.container, this.props.style]} >
                <Text style={[Styles.keyStyle, this.props.titleStyle]}>{this.props.title}</Text>
                <Text style={[Styles.valueStyle, this.props.valueStyle]} >{this.props.value}</Text>
            </View>
        )
    }
}

export default PairView
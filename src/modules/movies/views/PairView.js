import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PairView extends Component {

    render() {
        return (
            <View style={[{ flexDirection: 'row' }, this.props.style]} >
                <Text style={[{ flex: 0.3, fontWeight: 'bold', color: 'white', }, this.props.titleStyle]}>{this.props.title}</Text>
                <Text style={[{ flex: 0.8, color: 'white', flexWrap: 'wrap' }, this.props.valueStyle]} >{this.props.value}</Text>
            </View>
        )
    }
}

export default PairView
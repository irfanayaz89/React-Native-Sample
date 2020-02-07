import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';

const PairView = (props) => {

        return (
            <View style={[Styles.container, Styles.margin, props.style]} >
                <Text style={[Styles.keyStyle, props.titleStyle]}>{props.title}</Text>
                <Text style={[Styles.valueStyle, props.valueStyle]} >{props.value}</Text>
            </View>
        );
}

export default PairView;
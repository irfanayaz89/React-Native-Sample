import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

const PairView = (props) => {

        return (
            <View style={[Styles.container, Styles.margin, props.style]} >
                <Text style={[Styles.keyStyle, props.titleStyle]}>{props.title}</Text>
                <Text style={[Styles.valueStyle, props.valueStyle]} >{props.value}</Text>
            </View>
        );
}

PairView.defaultProps = {
    title: 'Property',
    value: 'Value'
}

PairView.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default PairView;
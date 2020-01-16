import React, { Component } from 'react';
import { ImageBackground } from 'react-native';


class SplashScreen extends Component {

    constructor(props) {
        
        super(props);

        this.goToApp = this.goToApp.bind(this);
    }
    
    componentDidMount() {

        setTimeout(this.goToApp, 3000);
    }
    
    render() {
        
        const backgroundImage = require('../../../assets/images/splash.png');
        
        return(
            <ImageBackground style={{width: '100%', height: '100%'}}source={backgroundImage}/>
        );
    }

    goToApp() {
        
        this.props.navigation.navigate('MoviesStack');
    }
}

export default SplashScreen;
        
        
        
        
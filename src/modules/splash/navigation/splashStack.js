import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from '../../splash/screen';

const splashStack = createStackNavigator({
  
    Splash: {
        screen: SplashScreen,
        navigationOptions: () => ({
          headerBackTitle: null,
          header: null
        })
    },
  }, {
    initialRouteName: 'Splash',
    mode: 'modal',
    headerMode: 'none'
  }
)

export default splashStack;
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import splashStack from '../modules/splash/navigation'
import moviesStack from '../modules/movies/navigation'

const MainNavigator = createSwitchNavigator({
        SplashStack: splashStack,
        MoviesStack: moviesStack
    }, {
        initialRouteName: "SplashStack",
        headerMode: 'none',
        mode: 'modal'
    }
);

export default createAppContainer(MainNavigator);
import { createStackNavigator, createAppContainer } from "react-navigation";
import MoviesScreen from '../../movies/screens';
import MovieDetail from '../../movies/screens/movieDetailScreen';

const moviesStack = createStackNavigator({
  
    MoviesList: {
        screen: MoviesScreen,
        navigationOptions: () => ({
          headerBackTitle: null,
        })
    },
    MovieDetail: {
      screen: MovieDetail,
      navigationOptions: () => ({
        headerBackTitle: null,
      })
    }
  }, {
    initialRouteName: 'MoviesList',
    headerMode: 'none'
  }
)

export default moviesStack;
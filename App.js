import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home/Home'
import Detail from './src/Detail/Detail'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail'
    }
  }
});

export default createAppContainer(AppNavigator);

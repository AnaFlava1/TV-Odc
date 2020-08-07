import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const NavStack = createStackNavigator({
  SignIn,
  SignUp,
  Main: {
    screen: Main,
    navigationOptions: { header: null }
  }
})

const Routes = createAppContainer(NavStack)

export default Routes

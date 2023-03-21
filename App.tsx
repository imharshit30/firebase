import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './components/Login';
import LoginHeader from './components/LoginHeader';
import SignIn from './components/SignIn';
import Main from './screens/Main';
import MainLogin from './screens/MainLogin';
import PhoneAuth from './screens/PhoneAuth';


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={MainLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone"
          component={PhoneAuth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

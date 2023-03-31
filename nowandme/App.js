import { StatusBar } from 'expo-status-bar';
import Home from './app/screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/screens/login';
import Register from './app/screens/register';
import LoginModal from './app/components/loginModal';

const RootStack = createStackNavigator();

const config = {
  // animation: 'spring',
  config: {
    // stiffness: 1000,
    // damping: 500,
    // mass: 3,
    // overshootClamping: true,
    restDisplacementThreshold: 2,
    // restSpeedThreshold: 1,
    duration: 0
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Home' component={Home} />
          <RootStack.Screen name='Login' component={Login} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
            transitionSpec: {
              open: {
                config: {
                  duration: 0
                }
              },
              close: {
                config: {
                  duration: 0
                }
              }
            }
          }}
        >
          <RootStack.Screen name='LoginModal' component={LoginModal} />
          <RootStack.Screen name='Register' component={Register} />
        </RootStack.Group>
      </RootStack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
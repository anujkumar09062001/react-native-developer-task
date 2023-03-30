import { StatusBar } from 'expo-status-bar';
import Home from './app/screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/screens/login';
import Register from './app/screens/register';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Home' component={Home} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false
          }}
        >
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Register' component={Register} />
        </RootStack.Group>
      </RootStack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
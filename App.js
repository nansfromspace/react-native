import React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Login from './components/Login';
import Produtos from './components/Produtos/index';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen 
      name="Home"
      component ={Home}
      option= {{title: 'Home'}}
      />
      
      <Stack.Screen 
      name="Login"
      component ={Login}
      option= {{title: 'Login'}}
      />

      <Stack.Screen
      name="Produtos"
      component={Produtos}
      options={{title: 'Produtos'}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


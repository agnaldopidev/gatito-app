import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Servico } from './telas/Servico';
import { Carrinho } from './telas/Carrinho';

import { cores } from './estilos/Global';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: cores.roxo,
        inactiveTintColor: cores.claro,
        activeBackgroundColor: cores.roxo,
        inactiveBackgroundColor: cores.laranja,
        style: {
          height: 70,
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: cores.laranja 
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Serviços" component={Servico} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>
}
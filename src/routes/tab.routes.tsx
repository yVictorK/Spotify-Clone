import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Books, House, HouseSimple, MagnifyingGlass, SpotifyLogo } from 'phosphor-react-native';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarShowLabel: false,
        title: '',
        tabBarStyle: {
          backgroundColor: '#111',
          borderColor: '#111',
          height: 65
        },
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <House size={28} color={color} weight={focused ?'fill' : 'regular'} />
        }}
      />
      <Tab.Screen
        name='search'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <MagnifyingGlass size={28} color={color} weight={focused ?'fill' : 'regular'} />
        }}
      />
      <Tab.Screen
        name='library'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <Books size={28} color={color} weight={focused ?'fill' : 'regular'} />
        }}
      />
      <Tab.Screen
        name='premium'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => <SpotifyLogo size={28} color={color} weight={focused ?'fill' : 'regular'} />
        }}
      />
    </Tab.Navigator>
  )
}
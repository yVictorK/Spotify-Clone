import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Books, House, MagnifyingGlass, SpotifyLogo } from 'phosphor-react-native';
import { Search } from '../screens/Search';
import { StackRoutes } from './stack.routes';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderColor: '#111',
          height: 65
        },
      }}
    >
      <Tab.Screen
        name='initial'
        component={StackRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => <House size={28} color={color} weight={focused ?'fill' : 'regular'} />
        }}
      />
      <Tab.Screen
        name='search'
        component={Search}
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
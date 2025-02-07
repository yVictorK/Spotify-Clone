import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../screens/Search';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Profile } from '../screens/Profile';

export type StackRoutesType = {
  home: undefined;
  settings: undefined;
  profile: undefined;
}

const Stack = createNativeStackNavigator<StackRoutesType>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='home'
        component={Home}
      />
      <Stack.Screen
        name='settings'
        component={Settings}
      />
      <Stack.Screen
        name='profile'
        component={Profile}
      />
    </Stack.Navigator>
  )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../screens/Search';
import { Home } from '../screens/Home';

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
        component={Search}
      />
      <Stack.Screen
        name='profile'
        component={Search}
      />
    </Stack.Navigator>
  )
}
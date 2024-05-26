import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/tab.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
      <StatusBar  style='inverted' backgroundColor='#232323' />
    </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Termos from './screens/Termos';
import Politica from './screens/Politica';
import Principal from './screens/Principal';
import InfoStack from './routes/infoStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  return <InfoStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

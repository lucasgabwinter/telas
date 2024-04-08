import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Principal from '../screens/Principal';
import Termos from '../screens/Termos';
import Politica from '../screens/Politica';
const Stack = createNativeStackNavigator();

export default function InfoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#AFD6C4',
          },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#FAFAFA' },
        }}
      >
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Menu Principal',
          }}
        />
        <Stack.Screen name="Termos" component={Termos} />
        <Stack.Screen name="Politica" component={Politica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

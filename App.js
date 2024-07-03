import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import SetPetInfo from './src/screens/SetPetInfo';
import DataPet from './src/screens/DataPet'
import PruebaComponentes from './src/screens/PruebaComponentes';

export default function App() {
  return (
    <View style={styles.container}>
{/*       <Home /> */}
       <SetPetInfo />
      {/* <DataPet /> */}
      {/* <PruebaComponentes /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

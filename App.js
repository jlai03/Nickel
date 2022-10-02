import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './components/Home.js';


export default function App() {
  return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Home/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#899a7a',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
});
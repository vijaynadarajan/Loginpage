import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import screen
import NavigationScreen from "./screen/Navigations";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
       <NavigationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});

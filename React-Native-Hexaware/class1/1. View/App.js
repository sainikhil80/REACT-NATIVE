import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.header }>
        <Text style={ styles.boldText }>Hello, World</Text>
      </View>    
      <View style={ styles.body }>
        <Text>lorem lorem lorem lorem</Text>
        <Text>lorem lorem lorem lorem</Text>
        <Text>lorem lorem lorem lorem</Text>
      </View>
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
  header:{
    backgroundColor: 'green',
    padding: 20
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  }
});

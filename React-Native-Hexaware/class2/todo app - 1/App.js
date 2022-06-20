import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'create an app', key: '1' },
    { text: 'play cricket', key: '2' },
    { text: 'call your friend', key: '1' }
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={ styles.content }>
        {/* to form */}
        <View style={ styles.list }>
          <FlatList 
          data={ todos }
          renderItem={({ item }) =>(
            <TodoItem item={ item} />
          ) }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40
  },
  list: {
    marginTop: 20
  }
  
});

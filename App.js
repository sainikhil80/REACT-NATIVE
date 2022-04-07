import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Alert } from 'react-native';
import React,{ useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import Calcy from  './components/Calcy';



export default function App() {
  const [todos, setTodos] = useState([
    { text: 'sprint meetings', key: '1' },
    { text: 'scrum meetings', key: '2' },
    { text: 'supports tasks', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(preTodos => {
      return preTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
     if(text.length > 3){
      setTodos(preTodos => {
        return [
          { text, key: Math.random().toString() },
          ...preTodos
        ];
      });
     }else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  return (
   
    <View style={styles.container}>
      <Header />
      <View style={ styles.content }>
         <TodoList  submitHandler={submitHandler} />
        <View style={ styles.list }>
          <FlatList 
          data={ todos }
          renderItem={({ item }) =>(
            <TodoItem item={ item} pressHandler={pressHandler} />
          ) }
          />
         
        <View>
        <Calcy  />
        
        </View>
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
  },
  lists:{
    marginTop:20
  }

})


import React ,{ useState } from "react";
import { StyleSheet,Text,Button,View,TextInput} from "react-native";

export default function TodoList({submitHandler}){
    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
      };
    
      const pressHandler = () => {
        submitHandler(text);
        setText('');
      }
    return(
        <View>
            <TextInput
            style={styles.input}
             placeholder='add List'
             onChangeText={changeHandler} 
             value={text}
          
             />
             <Button color='skyblue' title='add to list'  onPress= {pressHandler }  />
        </View>
       
    );
}

const styles=StyleSheet.create({
    input:{
       marginBottom:10,
       paddingHorizontal:8,
       paddingVertical:6,
       borderBottomWidth:1,
       borderBottomColor:'#ddd'
    },
});
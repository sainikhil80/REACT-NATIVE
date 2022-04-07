import React, { useState } from "react";
import {  Text, View, TextInput,Button } from "react-native";

export default function(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
  

    const changeHandler1 = (num1) => {
        setNum1(num1);
      };
    
      const changeHandler2 = (num2) => {
        setNum2(num2);
      };
       
    
      const addHandler = () => {
        submitHandler(add);
      
        
        
      }

      const subHandler = () => {
        submitHandler(sub);
    
      }

      const multiplyHandler = () => {
        submitHandler(mul);
       
      }

      const divideHandler = () => {
        submitHandler(div);
    
      }

        return(
            <View>
                <TextInput style={{borderWidth:1,margin:10}}
                                  placeholder="number1"
                                  keyboardType="numeric"
                                  onChangeText={changeHandler1} 
                                  />
                <TextInput style={{borderWidth:1,margin:10}}
                                  placeholder="number1"
                                  keyboardType="numeric"
                                  onChangeText={changeHandler2} 
                                  />
                                  
                <Button title="Add"  onPress= {addHandler } /><br></br>
                <Button title="Sub"  onPress= {subHandler } /><br></br>
                <Button title="Multiply"  onPress= {multiplyHandler } /><br></br>
                <Button title="Divide"  onPress= {divideHandler } /><br></br>
              
            </View>
        )
    }

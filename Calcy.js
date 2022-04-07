import React, { useState } from "react";
import {  Text, View, TextInput,Button } from "react-native";

export default function(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const[result,setResult]=useState(0);
  

    const changeHandler1 = (num1) => {
        setNum1(num1);
      };
    
      const changeHandler2 = (num2) => {
        setNum2(num2);
      };
       


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
                 <TextInput style={{borderWidth:1,margin:10}}
                                  placeholder="result"
                                  value={result} 
                                 />               
               
                  <Button title="Add"  onPress= {()=>setResult(parseInt(num1)+parseInt(num2)) } /><br></br>
                <Button title="Sub"  onPress= {()=> setResult(parseInt(num1)-parseInt(num2))} /><br></br>
                <Button title="Multiply"  onPress= {()=>setResult(parseInt(num1)*parseInt(num2)) } /><br></br>
                <Button title="Divide"  onPress= {()=>setResult(parseInt(num1)/parseInt(num2)) } /><br></br>
              
            </View>
        )
    }

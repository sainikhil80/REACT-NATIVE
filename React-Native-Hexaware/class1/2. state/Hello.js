import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Hello(){
    const [name, setName]  =useState('Guest')

    const clickHandler = () => {
        setName('Mark')
    }

    return(
        <View style={ styles.container }>
            <Text style={{ fontSize: 40 }}>Welcome, { name }</Text>
            <Button title='Update' onPress={ clickHandler } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'grey',
        justifyContent: 'center',        
    }
})
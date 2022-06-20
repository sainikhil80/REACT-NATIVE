import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function FlexBoxDemo(){
    return(
        <View style={ styles.container }>
            <Text style={styles.boxOne }>One</Text>
            <Text style={styles.boxTwo }>Two</Text>
            <Text style={styles.boxThree }>Three</Text>
            <Text style={styles.boxFour }>Four</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: 'grey'
    },
    boxOne:{
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo:{
        flex: 2,
        backgroundColor: 'coral',
        padding: 20
    },
    boxThree:{
        flex: 3,
        backgroundColor: 'skyblue',
        padding: 30
    },
    boxFour:{
        flex: 4,
        backgroundColor: 'gold',
        padding: 40
    }
})

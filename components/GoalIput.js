import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View 
        style={styles.inputContainer}>
        <TextInput 
        placeholder='Course Goal' 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCLE' color="red" onPress={props.onCancle}/>
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler}/>
          </View>
        </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
      flex: 1,
      justifyContent: 'center', 
      alignItems:'center'
    },
    input:{
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      padding: 10, 
      width: '80%',
      marginBottom: 10
    },
    buttonContainer:{
      justifyContent:'space-between',
      width: '60%',
      flexDirection:'row'
    },
    button:{
      width: '40%',
      
    }
})

export default GoalInput;

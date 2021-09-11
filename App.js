import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View,Button, FlatList } from 'react-native';

import GoalInput from './components/GoalIput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.lengh === 0){
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancleGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress= {() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancle={cancleGoalAdditionHandler}/>      
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data ={courseGoals} 
      renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
      {/* <ScrollView>  */}
        {/* {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))} */}
      {/* </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  
  
});

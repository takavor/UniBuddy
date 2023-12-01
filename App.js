import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';
import TaskScreen from './screens/TaskScreen';
import CreateCourseScreen from './screens/CreateCourseScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Course" component={CourseScreen} />
        <Stack.Screen name="CreateCourse" component={CreateCourseScreen} />
        {/* <Stack.Screen name="Task" component={TaskScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import CreateQuestion from './pages/CreateQuestion';
import ChooseTheme from './pages/ChooseTheme';

const AppStack = createStackNavigator();

const Question = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ChooseTheme" component={ChooseTheme} />
      <AppStack.Screen name="CreateQuestion" component={CreateQuestion} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Question" component={Question} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

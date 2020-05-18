import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

import CreateQuestion from './pages/CreateQuestion';
import ChooseTheme from './pages/ChooseTheme';

import TutorialQuiz from './pages/TutorialQuiz';
import QuestionPlay from './pages/QuestionPlay';

const AppStack = createStackNavigator();

const Question = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ChooseTheme" component={ChooseTheme} />
      <AppStack.Screen name="CreateQuestion" component={CreateQuestion} />
    </AppStack.Navigator>
  );
};

const PlayQuiz = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="TutorialQuiz" component={TutorialQuiz} />
      <AppStack.Screen name="QuestionPlay" component={QuestionPlay} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Question" component={Question} />
        <AppStack.Screen name="PlayQuiz" component={PlayQuiz} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

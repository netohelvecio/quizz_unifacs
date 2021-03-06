import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'mobx-react';

import { QuestionStore } from './store/question';

import Home from './pages/Home';

import CreateQuestion from './pages/CreateQuestion';
import ChooseTheme from './pages/ChooseTheme';

import { TutorialQuiz } from './pages/TutorialQuiz';
import ChooseThemePlay from './pages/ChooseThemePlay';
import { QuestionPlay } from './pages/QuestionPlay';
import EndQuiz from './pages/EndQuiz';

const AppStack = createStackNavigator();

const questionStore = new QuestionStore();

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
      <AppStack.Screen name="ChooseThemePlay" component={ChooseThemePlay} />
      <AppStack.Screen name="QuestionPlay" component={QuestionPlay} />
      <AppStack.Screen name="EndQuiz" component={EndQuiz} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <Provider questionStore={questionStore}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Question" component={Question} />
          <AppStack.Screen name="PlayQuiz" component={PlayQuiz} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src';
import { AppStateProvider } from './src/context/appStore';
import { GameContextProvider } from './src/context/quizContext';

export default function App() {
  return (
    <AppStateProvider>
      <GameContextProvider>
        <AppNavigator />
      </GameContextProvider>
    </AppStateProvider>
  );
}



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from './components/Text';
import { useCounterStore } from './store/useCounterStore';

const App = () => {
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text variant="h1" align="center">Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
        <Button title="Add 5" onPress={() => incrementBy(5)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});

export default App;

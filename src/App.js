import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FocusInput} from './component/FocusInput';
import TimerPage from './component/TimerPage';
const App = () => {
  // console.log('application started');
  const [items, setitems] = useState(null);
  const [input, setInput] = useState(null);

  const inputField = text => {
    setInput(text);
    console.log(text);
  };

  return (
    <View style={styles.container}>
      {!input ? (
        <FocusInput inputText={inputField} />
      ) : (
        <TimerPage task={input} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

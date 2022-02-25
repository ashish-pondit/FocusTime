import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FocusInput} from './component/FocusInput';
import TimerPage from './component/TimerPage';
import FocusHistory from './component/FocusHistory';
import {color, font, spacing} from './utils/utility';

const App = () => {
  // console.log('application started');
  const [items, setitems] = useState([]);
  const [input, setInput] = useState(null);

  const updateData = (inputTopic, status) => {
    setitems([...items, {topic: inputTopic, status: status}]);
  };

  const inputField = text => {
    setInput(text);
    console.log(text);
  };

  const onClear = () => {
    setitems([]);
  };

  console.log(items);

  return (
    <View style={styles.container}>
      {!input ? (
        <>
          <FocusInput inputText={inputField} />
          <FocusHistory focusHistory={items} onClear={onClear} />
        </>
      ) : (
        <TimerPage
          task={input}
          onTimerEnd={() => {
            updateData(input, 1);
            setInput(null);
          }}
          clearInput={() => {
            updateData(input, 0);
            setInput(null);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
});

export default App;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FocusInput} from './component/FocusInput';
import TimerPage from './component/TimerPage';
import FocusHistory from './component/FocusHistory';
import {color, font, spacing} from './utils/utility';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  // console.log('application started');
  const [items, setitems] = useState([]);
  const [input, setInput] = useState(null);

  const updateData = (inputTopic, status) => {
    setitems([...items, {topic: inputTopic, status: status}]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('bb', JSON.stringify(items));
    } catch (e) {
      console.log(e);
    }
  };

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  loadFocusHistory = async () => {
    try {
      const savedData = await AsyncStorage.getItem('bb');
      if (savedData && JSON.parse(savedData).length) {
        setitems(JSON.parse(savedData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [items]);

  const inputField = text => {
    setInput(text);
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

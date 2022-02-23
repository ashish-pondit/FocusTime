import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RoundButton from './RoundButton';
import {color, font, spacing} from '../utils/utility';

export const FocusInput = ({inputText}) => {
  const [tempInput, settempInput] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <View style={styles.inputRoundContainer}>
        <TextInput
          placeholder="Input task"
          style={styles.taskInput}
          onChangeText={settempInput}></TextInput>
        <RoundButton
          title="+"
          style={styles.roundBtn}
          size={60}
          font={30}
          onPress={() => {
            inputText(tempInput);
            settempInput('');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.primary,
  },
  inputRoundContainer: {
    flexDirection: 'row',
  },
  title: {fontSize: 26, margin: 10, fontWeight: 'bold', color: 'black'},
  roundBtn: {margin: spacing.ssm},
  taskInput: {
    backgroundColor: color.secondary,
    flexGrow: 1,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: spacing.ssm,
  },
});

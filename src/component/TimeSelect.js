import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RoundButton from './RoundButton';
import {color, font, spacing} from '../utils/utility';

const TimeSelect = ({onChangeTime}) => {
  return (
    <View style={styles.container}>
      <RoundButton
        size={80}
        title="10"
        style={styles.timeButton}
        font={font.vlg}
        onPress={() => onChangeTime(10)}
      />
      <RoundButton
        size={80}
        title="15"
        style={styles.timeButton}
        font={font.vlg}
        onPress={() => onChangeTime(15)}
      />
      <RoundButton
        size={80}
        title="20"
        style={styles.timeButton}
        font={font.vlg}
        onPress={() => onChangeTime(20)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', width: '100%', margin: spacing.md},
  timeButton: {
    borderRadius: 200,
    borderWidth: 1,
    margin: spacing.sm,
  },
});

export default TimeSelect;

import React, {useState, useEffect} from 'react';
import {font, color, spacing} from '../utils/utility';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const RoundButton = ({title, style, size, font, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles(size).container, style]}
      onPress={props.onPress}>
      <Text style={styles(font).title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    container: {
      backgroundColor: color.secondary,
      // padding: 10,
      height: size,
      width: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 0.3,
    },
    title: {
      fontSize: size,
      color: color.black,
    },
  });
export default RoundButton;

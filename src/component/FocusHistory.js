import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  Platform,
  FlatList,
} from 'react-native';
import {font, color, spacing} from '../utils/utility';
import {FocusInput} from './component/FocusInput';
import CountDown from './CountDown';
import RoundButton from './RoundButton';

const historyItem = ({item, index}) => {
  console.log('hello from history item');
  console.log(item);
  return <Text style={styles.historyItemColor(item.status)}>{item.topic}</Text>;
};

const FocusHistory = ({focusHistory, onClear}) => {
  return (
    <View style={{flex: 2, alignItems: 'center'}}>
      {focusHistory.length > 0 && (
        <>
          <Text style={styles.title}>Things I've focused on</Text>
          <FlatList
            style={{flex: 1}}
            contentContainerStyle={{flex: 1, alignItems: 'center'}}
            data={focusHistory}
            renderItem={historyItem}
          />

          <RoundButton
            size={60}
            title="clear"
            font={20}
            style={styles.clearBtn}
            onPress={() => {
              onClear();
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  historyItemColor: status => ({
    color: status === 1 ? color.success : color.alert,
    fontSize: font.vlg,
  }),
  title: {
    color: 'black',
    fontSize: font.vvlg,
  },
  clearBtn: {
    borderRadius: 100,
    marginBottom: 40,
  },
});

export default FocusHistory;

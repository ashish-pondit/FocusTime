import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Vibration, Platform} from 'react-native';
import {font, color, spacing} from '../utils/utility';
import {FocusInput} from './component/FocusInput';
import CountDown from './CountDown';
import RoundButton from './RoundButton';
import TimeSelect from './TimeSelect';
import {useKeepAwake} from '@sayem314/react-native-keep-awake';

const TimerPage = ({task, inputText}) => {
  useKeepAwake();
  const [minutes, setminutes] = useState(0.1);
  const [started, setstarted] = useState(true);

  const changetime = min => {
    setminutes(min);
    setstarted(false);
  };

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      // Vibration.vibrate(PATTERN);
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 6000);
    }
  };

  const onEnd = () => {
    vibrate();
    setminutes(1);
    setstarted(false);
    inputText(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownFrame}>
        <CountDown minutes={minutes} isPaused={!started} onEnd={onEnd} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headding}>Focusing on:</Text>
        <Text style={styles.focusTask}>{task}</Text>
      </View>

      <View style={styles.timeBtnWraper}>
        <TimeSelect onChangeTime={changetime} />
      </View>

      {started ? (
        <RoundButton
          size={150}
          style={styles.roundBtn}
          title="PAUSE"
          font={35}
          onPress={() => {
            setstarted(false);
          }}
        />
      ) : (
        <RoundButton
          size={150}
          style={styles.roundBtn}
          title="START"
          font={35}
          onPress={() => {
            setstarted(true);
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
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: spacing.lg,
  },
  headding: {
    fontSize: font.vvlg,
    color: color.black,
  },
  focusTask: {
    fontSize: font.vvlg,
    fontWeight: 'bold',
    color: color.black,
  },
  countdownFrame: {
    flex: 0.4,
    margin: spacing.vlg,
    color: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundBtn: {
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 2,
    position: 'relative',
    top: 100,
  },
  timeBtnWraper: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default TimerPage;

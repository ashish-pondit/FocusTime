import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {font, color, spacing} from '../utils/utility';

function toMilliseconds(time) {
  return time * 1000 * 60;
}

function formatTime(t) {
  return t < 10 ? '0' + t : t;
}
const CountDown = ({minutes = 20, isPaused, onEnd}) => {
  const interval = useRef(null);
  const [millis, setmillis] = useState(toMilliseconds(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const second = Math.floor(millis / 1000) % 60;

  const countTimer = () => {
    setmillis(time => {
      if (time == 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }

      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setmillis(toMilliseconds(minutes));
    console.log(millis);
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countTimer, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <Text style={styles.font}>
      {formatTime(minute)}:{formatTime(second)}
    </Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: font.xxlg,
    color: color.black,
    fontWeight: 'bold',
  },
});

export default CountDown;

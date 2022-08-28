import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import {useKeepAwake} from 'expo-keep-awake'
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from './Timing'
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];



export const Timer = ({ focusInput, clearInput, onTimerEnd  }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    reset()
    onTimerEnd(focusInput)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
          onProgress={setProgress}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}> Sa fokus: </Text>
          <Text style={styles.task}> {focusInput} </Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progress}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.timingWraper}>
       <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWraper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
        
      </View>
      <View style={styles.exit}>
      <RoundedButton size={50} title='-' onPress={clearInput}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.textBlack,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
  },
  timingWraper:{
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.md,
  },
  exit:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -40,
    paddingTop: spacing.lg,
  }
});

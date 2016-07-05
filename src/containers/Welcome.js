import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';

import LinearGradient from 'react-native-linear-gradient';

const COLOR_TOP = '#4A148C';
const COLOR_BOTTON = '#880E4F';

export const Welcome = (props) => (
  <View style={{flex: 1}}>
    <LinearGradient
      colors={[COLOR_TOP, COLOR_BOTTON]}
      style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          DemoApp
        </Text>
      </View>
      <View style={styles.lastWorkoutContainer}>
        <Text style={styles.lastWorkoutTitle}>
          Your last workout
        </Text>
      </View>
      <View style={{ padding: 30 }}>
        <Button
          onPress={props.startWorkout}
          style={styles.button}
          textStyle={styles.buttonText}
          children={'Start Workout'}
        />
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: '#F3F3F3',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: '#F3F3F3'
  },
  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});

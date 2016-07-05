import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const COLOR_TOP = '#4A148C';
const COLOR_BOTTON = '#880E4F';

export const Welcome = (props) => (
  <LinearGradient
    colors={[COLOR_TOP, COLOR_BOTTON]}
    style={{flex: 1}}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        DemoApp
      </Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>
        Log your fitness
      </Text>
    </View>
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={props.startWorkout} style={styles.button}>
        <Text style={styles.buttonText}>
          Start Workout
        </Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
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
    color: 'blue',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'blue'
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

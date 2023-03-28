import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

import { ChartsViewProps } from './types';
import { COLORS } from '../../../styles';
import styles from './styles';

export const ChartView: React.FC<ChartsViewProps> = ({ data, label }) => {
  const pollRef = useRef(new Animated.Value(0)).current;

  const AnimateResult = () => {
    Animated.timing(pollRef, {
      toValue: data > 0 ? data : -data,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    AnimateResult();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.chartContainer}>
        <View style={styles.negativeProgressContainer}>
          <Animated.View
            style={{
              width: data < 0 ? pollRef : 0,
              backgroundColor: data < -10 ? COLORS.red : COLORS.grey,
              height: 30,
              marginTop: 15,
            }}
          />
        </View>
        <View style={styles.seperator} />
        <View style={styles.positiveProgressContainer}>
          <Animated.View
            style={{
              width: data > 0 ? pollRef : 0,
              backgroundColor: data > 10 ? COLORS.blue : COLORS.grey,
              height: 30,
              marginTop: 15,
            }}
          />
        </View>
      </View>
    </View>
  );
};

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

import { ChartSecondViewProps } from './types';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import styles from './styles';
import { COLORS } from '../../../styles';

export const ChartSecondView: React.FC<ChartSecondViewProps> = ({
  data,
  label,
  max,
}) => {
  const pollRef = useRef(new Animated.Value(0)).current;
  const ProcenResult = (data / max) * 100;

  const inputRange = [0, 100];
  const outputRange = ['0%', '100%'];

  const animatedWidth = pollRef.interpolate({ inputRange, outputRange });

  const AnimateResult = () => {
    Animated.timing(pollRef, {
      toValue: ProcenResult,
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
        <View style={styles.seperator} />
        <View style={styles.positiveProgressContainer}>
          <Animated.View
            style={{
              width: data > 0 ? animatedWidth : 0,
              backgroundColor: data > 10 ? COLORS.purple2 : COLORS.grey,
              height: 30,
              marginTop: 15,
            }}
          />
        </View>
      </View>
    </View>
  );
};

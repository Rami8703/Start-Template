import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, ImageEditor, Text, View } from 'react-native';

import styles from './styles';
import { ChartsProps } from './types';
import { BarChart, Grid } from 'react-native-svg-charts';
import { ChartView } from './ChartView/ChartView';
import { COLORS } from '../../styles';

export const Charts: React.FC<ChartsProps> = () => {
  //   const pollRef = useRef(new Animated.Value(0)).current;

  //   // const resultWidth = ((30/100)*100).toFixed(0)  // GET A PERCENTAGE VALUE

  const chartData = [
    { data: 50, label: 'All' },
    { data: -10, label: 'Crime' },
    { data: 10, label: 'Sports && Alcohol Nutriotio' },
    { data: 90, label: 'Moderations Company' },
    { data: -30, label: 'Byrritos &&  Nutriotio' },
    { data: -90, label: 'Moderations llsdada' },
    { data: 68, label: ' Company Secc' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.lberialText}>Liberal</Text>
        <Text style={styles.moderateText}>Moderate</Text>
        <Text style={styles.ConservativeText}>Conservative</Text>
      </View>
      {chartData.map((item) => {
        return (
          <ChartView
            label={item.label}
            data={item.data}
          />
        );
      })}
    </View>
  );
};

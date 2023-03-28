import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, ImageEditor, Text, View } from 'react-native';

import styles from './styles';
import { ChartSecondProps } from './types';
import { ChartSecondView } from './ChartView/ChartSecondView';
export const ChartSecond: React.FC<ChartSecondProps> = () => {
  const chartData = [
    { data: 50, label: 'All' },
    { data: 10, label: 'Crime' },
    { data: 2321, label: 'Sports && Alcohol Nutriotio' },
    { data: 1890, label: 'Moderations Company' },
    { data: 999, label: 'Byrritos &&  Nutriotio' },
    { data: 1150, label: 'Moderations llsdada' },
    { data: 68, label: ' Company Secc' },
  ];

  const max = 2321;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.blueText}>0</Text>
        <Text style={styles.greyText}>Moderate</Text>
        <Text style={styles.redText}>{max}</Text>
      </View>
      {chartData.map((item) => {
        return (
          <ChartSecondView
            label={item.label}
            data={item.data}
            max={max}
          />
        );
      })}
    </View>
  );
};

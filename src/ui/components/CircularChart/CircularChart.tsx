import React from 'react';
import { DonutChart } from 'react-native-circular-chart';
import { COLORS } from '../../styles';
import { CircularChartTypes } from './types';

export const CircularChart: React.FC<CircularChartTypes> = ({ data }) => {
  return (
    <DonutChart
      data={data}
      strokeWidth={40}
      radius={80}
      containerWidth={400}
      containerHeight={130 * 2}
      type="butt"
      startAngle={-90}
      endAngle={90}
      animationType="slide"
    />
  );
};

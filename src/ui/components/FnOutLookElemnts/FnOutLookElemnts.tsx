import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { FnOutLookElemntsProps } from './types';

export const FnOutLookElemnts: React.FC<FnOutLookElemntsProps> = ({
  title,
  isSelectable,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!isSelectable}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.section}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{title}</Text>
            <Text>S 329</Text>
          </View>
          <View style={styles.containerProcent}>
            <View style={styles.firstElement}>
              <Text style={styles.text}>FN</Text>
            </View>
            <View style={styles.secondElement}>
              <Text style={styles.text}>48,7%</Text>
            </View>
            <View style={styles.thirdElement}>
              <Text style={styles.text}>72,3%</Text>
            </View>
          </View>
          <Text>Similiarity</Text>
        </View>
        <View style={styles.section}>
          <Text>2022-2023 Regular Session</Text>
          <Text>92%</Text>
        </View>
      </View>
      {isSelectable && <Text>{'>'}</Text>}
    </TouchableOpacity>
  );
};

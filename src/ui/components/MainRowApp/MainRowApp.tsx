import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { MainRowAppProps } from './types';

export const MainRowApp: React.FC<MainRowAppProps> = ({
  firstPart,
  secondPart,
  IsSelectable,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={!IsSelectable}
    >
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.nameText}>{firstPart}</Text>
          <Text>{secondPart}</Text>
        </View>
        {IsSelectable && <Text style={styles.icon}>{'>'}</Text>}
      </View>
    </TouchableOpacity>
  );
};

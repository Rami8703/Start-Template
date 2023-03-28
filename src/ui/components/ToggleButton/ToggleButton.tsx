import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';
import styles from './styles';
import { ToggleButtonProps } from './types';

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: COLORS.grey1, true: COLORS.purple1 }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setValue}
        value={value}
      />
    </View>
  );
};

import React, { useState } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './styles';
import { InputProps } from './types';
import { COLORS } from '../../styles';

const Input: React.FC<InputProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChange,
  onBlur,
}) => {
  const [openEye] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={openEye}
          placeholderTextColor={COLORS.grey}
        />
      </View>
    </View>
  );
};

export default Input;

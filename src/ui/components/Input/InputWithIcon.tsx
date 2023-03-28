import type { FC } from 'react';
import React from 'react';
import { View } from 'react-native';
import Input from './Input';
import { InputProps } from './types';

type InputWithIconProps = {
  children: React.ReactNode;
};

const InputWithIcon: FC<InputWithIconProps> & {
  Input: FC<InputProps>;
} = function DebuggerContainer({ children }) {
  return <View>{children}</View>;
};
InputWithIcon.Input = Input;

export default InputWithIcon;

import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type DirectoryItemProps = {
  title: string;
  isOnline?: string;
  position?: string;
  phone?: string;
  email?: string;
  isSelect?: boolean;
  array?: string[];
  loading?: boolean;
};

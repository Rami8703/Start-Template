import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  button?: StyleProp<TextStyle>;
  buttonType?: ButtonType;
  onPress: () => void;
};

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
}

import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  TextStyle,
} from 'react-native';

import styles from './styles';
import { ButtonProps, ButtonType } from './types';

export const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  isLoading,
  containerStyle,
  onPress,
  buttonType,
}) => {
  //
  const memoizedButtonStyle = useMemo(() => {
    const containerStyle = [
      styles.container,
      buttonType === ButtonType.Primary ? styles.greyContainer : undefined,
    ];

    return disabled
      ? [containerStyle, styles.disabledContainer]
      : containerStyle;
  }, [buttonType, disabled]);

  const buttonTitleStyle = useMemo(() => {
    return buttonType === ButtonType.Primary
      ? [styles.title, styles.darkTitle]
      : styles.title;
  }, [buttonType]);

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        disabled={disabled || isLoading}
        style={memoizedButtonStyle}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              {/* {CustomIcon && <CustomIcon style={iconStyle} />} */}
              <Text style={buttonTitleStyle}>{title}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

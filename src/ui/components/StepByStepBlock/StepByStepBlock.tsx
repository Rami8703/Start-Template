import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { StepByStepBlockProps } from './types';

export const StepByStepBlock: React.FC<StepByStepBlockProps> = ({
  title,
  subTitle,
  other,
  phone,
  fax,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.mainContainer, styles.rowContainer]}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text>{subTitle}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsShown(!isShown);
            }}
          >
            <Text style={{ paddingRight: 20 }}>{'v'}</Text>
          </TouchableOpacity>
        </View>
        {isShown && (
          <View style={styles.wrapper}>
            <View style={styles.rowContainer}>
              <Text style={styles.setctionNameText}>Other</Text>
              <Text style={styles.boldText}>{other}</Text>
            </View>

            <View style={styles.wrapper}>
              <View style={styles.rowContainer}>
                <Text style={styles.setctionNameText}>Phone</Text>
                <Text style={styles.boldText}>{phone}</Text>
              </View>

              <Text style={[styles.setctionNameText, styles.lastChildSection]}>
                Fax
              </Text>
              <Text style={styles.boldText}>{fax}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

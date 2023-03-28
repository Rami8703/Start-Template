import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { MemberRowProps } from './types';

export const MemberRow: React.FC<MemberRowProps> = ({
  avatar,
  name,
  code,
  position,
  IsSelectable,
}) => {
  return (
    <View style={styles.container}>
      {avatar && (
        <Image
          style={styles.img}
          source={{ uri: avatar }}
        />
      )}
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.positionText}>{code}</Text>
          </View>
          <Text>{position}</Text>
        </View>
        {IsSelectable && <Text style={styles.icon}>{'>'}</Text>}
      </View>
    </View>
  );
};

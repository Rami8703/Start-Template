import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  TextStyle,
  Image,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';
import { MemberInfoProps } from './types';

export const MemberInfo: React.FC<MemberInfoProps> = ({
  avatar,
  name,
  online,
  description,
  organization,
  loading,
}) => {
  if (loading) {
    return (
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          marginHorizontal={30}
          flexDirection="row"
          alignItems="center"
        >
          <SkeletonPlaceholder.Item
            width={70}
            height={70}
            borderRadius={50}
          />
          <SkeletonPlaceholder.Item marginBottom={5}>
            <SkeletonPlaceholder.Item
              height={20}
              width={150}
              marginLeft={10}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item
              height={20}
              marginLeft={10}
              marginBottom={10}
              width={200}
            />
            <SkeletonPlaceholder.Item
              height={20}
              marginLeft={10}
              marginBottom={10}
              width={250}
            />
            <SkeletonPlaceholder.Item
              height={20}
              marginLeft={10}
              width={150}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: avatar }}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text
          style={styles.descriptionText}
          numberOfLines={1}
        >
          {description}
        </Text>
        <Text
          style={styles.descriptionText}
          numberOfLines={1}
        >
          {organization}
        </Text>
        <Text
          style={styles.onlineText}
          numberOfLines={1}
        >
          {online}
        </Text>
      </View>
    </View>
  );
};

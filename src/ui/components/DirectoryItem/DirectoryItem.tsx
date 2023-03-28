import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import styles from './styles';
import { DirectoryItemProps } from './types';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Label from '../../icons/label.svg';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const avatar = 'https://cdn-icons-png.flaticon.com/512/3/3729.png';

export const DirectoryItem: React.FC<DirectoryItemProps> = ({
  title,
  isOnline,
  position,
  phone,
  email,
  isSelect,
  array,
  loading,
}) => {
  const [elementsLength, SetElementsLength] = useState(4);

  if (loading) {
    return (
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item marginHorizontal={30}>
          <SkeletonPlaceholder.Item
            height={20}
            marginLeft={40}
            marginBottom={5}
            width={200}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={5}
          >
            <SkeletonPlaceholder.Item
              width={30}
              height={30}
              borderRadius={50}
            />
            <SkeletonPlaceholder.Item
              height={20}
              width={150}
              marginLeft={10}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            height={20}
            marginLeft={40}
            marginBottom={10}
          />
          <SkeletonPlaceholder.Item
            height={20}
            marginLeft={40}
            width={250}
            marginBottom={30}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!isSelect}
    >
      {isSelect && (
        <BouncyCheckbox
          iconStyle={styles.bouncyChecbokInconStyle}
          fillColor="#2274FF"
          onPress={(isChecked: boolean) => {
            console.log(isChecked, 'isChecked');
          }}
        />
      )}
      <View>
        <View style={styles.rowItem}>
          <Text>Custome Contact</Text>
          <Text>· Persone</Text>
        </View>
        {title && (
          <View style={styles.rowImage}>
            <Image
              style={{ height: 30, width: 30 }}
              source={{ uri: avatar }}
            />
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
        {(position || isOnline) && (
          <View style={styles.rowItem}>
            {position && <Text>{position} </Text>}
            {isOnline && <Text>· {isOnline}</Text>}
          </View>
        )}
        {(email || phone) && (
          <View style={styles.rowItem}>
            {phone && <Text style={styles.boldText}>{phone}</Text>}
            {email && <Text style={styles.boldText}> · {email}</Text>}
          </View>
        )}
        {array && (
          <View style={styles.rowItem}>
            <Label style={{ marginRight: 10 }} />
            {array.slice(0, elementsLength).map((item: string) => {
              return (
                <View style={styles.labelRow}>
                  <Text style={styles.textColor}>{item}</Text>
                </View>
              );
            })}
            {array.length > 3 && array.length !== elementsLength ? (
              <TouchableOpacity
                onPress={() => {
                  SetElementsLength(array.length);
                }}
                style={styles.labelRow}
              >
                <Text style={styles.textColor}>+{array.length - 4}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>
      <View>{!isSelect && <Text style={styles.icon}>{'>'}</Text>}</View>
    </TouchableOpacity>
  );
};

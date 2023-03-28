import React, { useMemo, useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { ButtonTabsProps } from './types';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { COLORS } from '../../styles';

export const ButtonTabs: React.FC<ButtonTabsProps> = ({
  titles,
  onPress,
  value,
  setValue,
}) => {
  const handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setValue(index);
    onPress();
  };

  return (
    <View>
      <SegmentedControlTab
        values={titles}
        selectedIndex={value}
        onTabPress={handleCustomIndexSelect}
        borderRadius={10}
        tabsContainerStyle={styles.tabContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTab}
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />
    </View>
  );
};

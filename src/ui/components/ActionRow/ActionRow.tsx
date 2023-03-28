import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { StepByStepBlock } from '../StepByStepBlock/StepByStepBlock';
import Campaign from '../../icons/campaign.svg';
import Arrow from '../../icons/rightArrow.svg';
import Committee from '../../icons/committee.svg';

import styles from './styles';
import { ActionRowProps } from './types';
//
export const ActionRow: React.FC<ActionRowProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>TUE, JAN 31, 2023</Text>
        <Text style={styles.text}>Today</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.rightContainer}>
          <Text style={styles.campaignText}>Campaign</Text>
          <View style={styles.row}>
            <View style={styles.item}>
              <View style={{ width: 25 }}>
                <Campaign />
              </View>
              <Text style={{ paddingLeft: 8 }}>Text ....</Text>
            </View>

            <Text>all day</Text>
          </View>
          <View style={styles.committee}>
            <View style={styles.item}>
              <Committee />
              <Text style={{ paddingLeft: 10 }}>Text ....</Text>
            </View>

            <Text>(Day 23-28,31)</Text>
          </View>
        </View>

        <Arrow />
      </View>
    </View>
  );
};

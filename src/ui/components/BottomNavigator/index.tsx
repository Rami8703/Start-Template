import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../styles';
import Bell from './icons/bell.svg';
import Search from './icons/search.svg';
import Dots from './icons/dots.svg';
import Plus from './icons/plus.svg';
import File from './icons/file.svg';
import styles from './styles';

const Tab = createBottomTabNavigator();

const One = () => (
  <View>
    <Text>One</Text>
    <View style={{ backgroundColor: 'red' }}>
      <Search stroke={'white'} />
    </View>
  </View>
);
const Two = () => <Text>Two</Text>;
const Three = () => <Text>Three</Text>;
const Four = () => <Text>Four</Text>;
const Five = () => <Text>Five</Text>;

type BottomTabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  hasBadge?: boolean;
};

export const SearchTabBarIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
}) => {
  return <Search stroke={focused ? 'white' : COLORS.grey} />;
};

export const BellTabBarIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
}) => {
  return <Bell stroke={focused ? 'white' : COLORS.grey} />;
};

export const DotsTabBarIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
}) => {
  return <Dots stroke={focused ? 'white' : COLORS.grey} />;
};

export const PlusTabBarIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
}) => {
  return <Plus stroke={focused ? 'white' : COLORS.grey} />;
};

export const FileTabBarIcon: React.FC<BottomTabBarIconProps> = ({
  focused,
}) => {
  return <File stroke={focused ? 'white' : COLORS.grey} />;
};

export const BottomTabNavigator: React.FC = memo(function BottomTabNavigator() {
  const bottomTabBarOptions = useMemo(
    () => ({
      tabBarStyle: {
        backgroundColor: COLORS.purple,
      },
      tabBarShowLabel: false,
      headerShown: true,
      keyboardHidesTabBar: true,
    }),
    []
  );

  const OneOption: BottomTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabel: 'One',
      tabBarIcon: BellTabBarIcon,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerLeft: (props) => <Text style={styles.headerLeft}>{'<'}</Text>,
    };
  }, []);

  const TwoOption: BottomTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabel: 'Two',
      tabBarIcon: FileTabBarIcon,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerLeft: (props) => <Text style={styles.headerLeft}>{'<'}</Text>,
    };
  }, []);

  const ThreeOption: BottomTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabel: 'Three',
      tabBarIcon: PlusTabBarIcon,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerLeft: (props) => <Text style={styles.headerLeft}>{'<'}</Text>,
    };
  }, []);

  const FourOption: BottomTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabel: 'Four',
      tabBarIcon: SearchTabBarIcon,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerLeft: (props) => <Text style={styles.headerLeft}>{'<'}</Text>,
    };
  }, []);

  const FiveOption: BottomTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabel: 'Five',
      tabBarIcon: DotsTabBarIcon,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerLeft: (props) => <Text style={styles.headerLeft}>{'<'}</Text>,
    };
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={bottomTabBarOptions}>
        <Tab.Screen
          name="One"
          component={One}
          options={OneOption}
        />
        <Tab.Screen
          name="Two"
          component={Two}
          options={TwoOption}
        />
        <Tab.Screen
          name="+"
          component={Three}
          options={ThreeOption}
        />
        <Tab.Screen
          name="Four"
          component={Four}
          options={FourOption}
        />
        <Tab.Screen
          name="Five"
          component={Five}
          options={FiveOption}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

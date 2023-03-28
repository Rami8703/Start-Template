// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CircularChart } from './CircularChart';
import { COLORS } from '../../styles';

export default {
  title: 'components/CircularChart',
  component: CircularChart,
} as ComponentMeta<typeof CircularChart>;

export const Basic: ComponentStory<typeof CircularChart> = (args) => (
  <CircularChart {...args} />
);

Basic.args = {
  data: [
    { name: '123', value: 3, color: 'red' },
    { name: '321', value: 1, color: COLORS.blue },
  ],
};

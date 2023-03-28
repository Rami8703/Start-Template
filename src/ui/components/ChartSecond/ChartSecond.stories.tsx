// stories/MyButton.stories.tsx
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChartSecond } from './ChartSecond';

export default {
  title: 'components/ChartSecond',
  component: ChartSecond,
} as ComponentMeta<typeof ChartSecond>;

export const Basic: ComponentStory<typeof ChartSecond> = (args) => {
  return <ChartSecond />;
};

Basic.args = {};

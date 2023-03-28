// stories/MyButton.stories.tsx
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Charts } from './Charts';

export default {
  title: 'components/Charts',
  component: Charts,
} as ComponentMeta<typeof Charts>;

export const Basic: ComponentStory<typeof Charts> = (args) => {
  return <Charts />;
};

Basic.args = {};

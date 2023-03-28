// stories/MyButton.stories.tsx
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FnOutLookElemnts } from './FnOutLookElemnts';

export default {
  title: 'components/FnOutLookElemnts',
  component: FnOutLookElemnts,
} as ComponentMeta<typeof FnOutLookElemnts>;

export const Basic: ComponentStory<typeof FnOutLookElemnts> = (args) => {
  return <FnOutLookElemnts {...args} />;
};

Basic.args = {
  title: 'NJ',
  isSelectable: false,
};

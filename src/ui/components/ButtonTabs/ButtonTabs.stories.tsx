// stories/MyButton.stories.tsx
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonTabs } from './ButtonTabs';

export default {
  title: 'components/ButtonTabs',
  component: ButtonTabs,
} as ComponentMeta<typeof ButtonTabs>;

export const Basic: ComponentStory<typeof ButtonTabs> = (args) => {
  const [value, setValue] = useState(0);
  return (
    <ButtonTabs
      {...args}
      value={value}
      setValue={setValue}
    />
  );
};

Basic.args = {
  titles: ['one', 'two', 'three', 'four'],
  onPress: () => {
    console.log('Pressed');
  },
};

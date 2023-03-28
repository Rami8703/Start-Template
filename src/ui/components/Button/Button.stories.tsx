// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { ButtonType } from './types';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const GrayComp: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Basic.args = {
  title: 'Log In',
  onPress: () => {
    console.log('Pressed');
  },
  buttonType: ButtonType.Default,
};

GrayComp.args = {
  title: 'GReYss',
  onPress: () => {
    console.log('Pressed');
  },
  buttonType: ButtonType.Primary,
};

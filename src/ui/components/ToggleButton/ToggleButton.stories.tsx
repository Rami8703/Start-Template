// stories/MyButton.stories.tsx
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleButton } from './ToggleButton';

export default {
  title: 'components/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const Basic: ComponentStory<typeof ToggleButton> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <ToggleButton
      value={value}
      setValue={setValue}
    />
  );
};

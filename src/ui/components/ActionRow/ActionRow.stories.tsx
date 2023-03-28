// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionRow } from './ActionRow';

export default {
  title: 'components/ActionRow',
  component: ActionRow,
} as ComponentMeta<typeof ActionRow>;

export const Basic: ComponentStory<typeof ActionRow> = (args) => (
  <>
    <ActionRow {...args} />
    <ActionRow {...args} />
    <ActionRow {...args} />
  </>
);

Basic.args = {
  //   avatar: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
  //   name: 'Mick Mulvaney',
  //   position: 'Chair',
  //   code: '(R-SC05)',
  //   IsSelectable: true,
};

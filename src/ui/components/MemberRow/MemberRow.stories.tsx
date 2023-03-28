// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemberRow } from './MemberRow';

export default {
  title: 'components/MemberRow',
  component: MemberRow,
} as ComponentMeta<typeof MemberRow>;

export const Basic: ComponentStory<typeof MemberRow> = (args) => (
  <>
    <MemberRow {...args} />
    <MemberRow {...args} />
    <MemberRow {...args} />
    <MemberRow {...args} />
  </>
);

Basic.args = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
  name: 'Mick Mulvaney',
  position: 'Chair',
  code: '(R-SC05)',
  IsSelectable: true,
};

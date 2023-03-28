// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MemberInfo } from './MemberInfo';

export default {
  title: 'components/MemberInfo',
  component: MemberInfo,
} as ComponentMeta<typeof MemberInfo>;

export const Basic: ComponentStory<typeof MemberInfo> = (args) => (
  <>
    <MemberInfo {...args} />
  </>
);

Basic.args = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/3/3729.png',
  name: 'Mick Mulvaney',
  description:
    'House of Representatives in approximate proportion to their populations, with every state guaranteed at least one seat',
  organization: 'Republican Party',
  online: 'Inactive',
  loading: false,
};

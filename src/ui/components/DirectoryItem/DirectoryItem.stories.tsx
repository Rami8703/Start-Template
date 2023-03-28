// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DirectoryItem } from './DirectoryItem';
import { DirectoryItemProps } from './types';

export default {
  title: 'components/DirectoryItem',
  component: DirectoryItem,
} as ComponentMeta<typeof DirectoryItem>;

export const Basic: ComponentStory<typeof DirectoryItem> = (args) => (
  <>
    <DirectoryItem {...args} />
    <DirectoryItem {...args} />
    <DirectoryItem {...args} />
    <DirectoryItem {...args} />
  </>
);

Basic.args = {
  title: 'rami person 001 sdsad',
  position: 'Regional Director',
  isOnline: 'Inactive since 2020',
  phone: '+371 532 129',
  email: 'matub1a@gmail.com',
  array: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
  loading: false,
};

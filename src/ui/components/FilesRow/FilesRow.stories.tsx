import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilesRow } from './FilesRow';

export default {
  title: 'components/FilesRow',
  component: FilesRow,
} as ComponentMeta<typeof FilesRow>;

export const Basic: ComponentStory<typeof FilesRow> = (args) => (
  <FilesRow {...args} />
);

Basic.args = {
  issueCount: 2,
};

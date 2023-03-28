import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainRowApp } from './MainRowApp';

export default {
  title: 'components/MainRowApp',
  component: MainRowApp,
} as ComponentMeta<typeof MainRowApp>;

export const Basic: ComponentStory<typeof MainRowApp> = (args) => (
  <>
    <MainRowApp {...args} />
    <MainRowApp {...args} />
    <MainRowApp {...args} />
    <MainRowApp {...args} />
    <MainRowApp {...args} />
  </>
);

Basic.args = {
  firstPart: 'Mick Mulvaney',
  secondPart: 'Chair',
};

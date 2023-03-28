// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StepByStepBlock } from './StepByStepBlock';

export default {
  title: 'components/StepByStepBlock',
  component: StepByStepBlock,
} as ComponentMeta<typeof StepByStepBlock>;

export const Basic: ComponentStory<typeof StepByStepBlock> = (args) => (
  <>
    <StepByStepBlock {...args} />
  </>
);

Basic.args = {
  title: '1916 Easter Rising Centennial Caucus',
  subTitle: 'Cimmitte, US House',
  other:
    'orem Ipsum is simply dummy text of the printing and typesetting industry. Lojb the leap into electronic typesetting, remain',
  phone: '+3809798231321',
  fax: '+(013)-2310-421',
};

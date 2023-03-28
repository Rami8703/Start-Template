// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';
import { useForm } from 'react-hook-form';

export default {
  title: 'components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

type FormValuesProps = {
  username: string;
};

type SubmitForm = (data: FormValuesProps) => void;

export const Basic: ComponentStory<typeof Input> = (args) => {
  const { control, handleSubmit, setValue } = useForm<FormValuesProps>({
    defaultValues: {
      username: '',
    },
  });

  return (
    <Input
      {...args}
      control={control}
    />
  );
};

Basic.args = {
  placeholder: 'Please Enter a Username',
  name: 'username',
  secureTextEntry: false,
};

import { Dispatch, SetStateAction } from 'react';

export type ButtonTabsProps = {
  titles: string[];
  onPress: () => void;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

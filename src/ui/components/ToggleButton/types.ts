import { Dispatch, SetStateAction } from 'react';

export interface ToggleButtonProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

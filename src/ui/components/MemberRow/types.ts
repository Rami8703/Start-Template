import { Dispatch, SetStateAction } from 'react';

export interface MemberRowProps {
  avatar?: string;
  name: string;
  code: string;
  position: string;
  IsSelectable: boolean;
}

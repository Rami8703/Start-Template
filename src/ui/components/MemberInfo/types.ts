import { Dispatch, SetStateAction } from 'react';

export interface MemberInfoProps {
  avatar?: string;
  name?: string;
  online?: string;
  organization?: string;
  description?: string;
  loading?: boolean;
}

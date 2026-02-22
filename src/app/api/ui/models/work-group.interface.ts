import { Permission } from './permission.interface';

// @ts-ignore
export interface WorkGroup {
  code: string;
  id: number;
  isDefault: boolean;
  name: string;
  permissions: Permission[];
}

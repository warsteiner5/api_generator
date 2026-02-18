import { Permission } from './permission.interface';

export interface WorkGroup {
  code: string;
  id: number;
  isDefault: boolean;
  name: string;
  permissions: Permission[];
}

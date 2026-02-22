import { EmployeeRole } from './employee-role.interface';

// @ts-ignore
export interface EmployeeWorkGroup {
  id: number;
  name: string;
  roles: EmployeeRole[];
}

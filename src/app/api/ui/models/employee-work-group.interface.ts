import { EmployeeRole } from './employee-role.interface';

export interface EmployeeWorkGroup {
  id: number;
  name: string;
  roles: EmployeeRole[];
}

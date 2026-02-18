import { EmployeeRole } from './employee-role.interface';

export interface EmployeeItem {
  customerEmail: string;
  firstName: string;
  hasDigitalSignature: boolean;
  id: number;
  isActive: boolean;
  lastName: string;
  middleName: string;
  phoneNumber: string;
  roles: EmployeeRole[];
  supplierEmail: string;
}

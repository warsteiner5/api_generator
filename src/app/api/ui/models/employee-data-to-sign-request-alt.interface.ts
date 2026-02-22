import { Employee } from './employee.interface';

// @ts-ignore
export interface EmployeeDataToSignRequestAlt {
  employeeDto: Employee;
  signatureAlgorithmOid: string;
}

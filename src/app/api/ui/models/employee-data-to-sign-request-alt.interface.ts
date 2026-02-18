import { Employee } from './employee.interface';

export interface EmployeeDataToSignRequestAlt {
  employeeDto: Employee;
  signatureAlgorithmOid: string;
}

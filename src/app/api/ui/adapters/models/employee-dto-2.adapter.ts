import { ApiEmployeeDto2 } from '../../../swagger/models/api-employee-dto-2';
import { EmployeeDto2 } from '../../models/employee-dto-2.interface';

export const employeeDto2Adapter = (source?: ApiEmployeeDto2 | null): EmployeeDto2 => {
  return {
    email: source?.Email,
    firstName: source?.FirstName,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    phone: source?.Phone,
    position: source?.Position,
  };
}

import { EmployeeDto2 } from '../../models/employee-dto-2.interface';
import { ApiEmployeeDto2 } from '../../../swagger/models/api-employee-dto-2';

export const apiEmployeeDto2Adapter = (source?: EmployeeDto2 | null): ApiEmployeeDto2 => {
  return {
    Email: source?.email,
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    Phone: source?.phone,
    Position: source?.position,
  };
}

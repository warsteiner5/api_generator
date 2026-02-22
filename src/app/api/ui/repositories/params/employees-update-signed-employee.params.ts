import { EmployeesUpdateSignedEmployee$Params } from '../../../swagger/fn/employees/employees-update-signed-employee';
import { UpdateSignedEmployee } from '../../models/update-signed-employee.interface';
import { apiUpdateSignedEmployeeDtoAdapter } from '../../adapters/models/api-update-signed-employee-dto.adapter';

// @ts-ignore
export interface EmployeesUpdateSignedEmployeeParams {
  id: number;
  body?: UpdateSignedEmployee;
}

export function employeesUpdateSignedEmployeeAdapter(params?: EmployeesUpdateSignedEmployeeParams): EmployeesUpdateSignedEmployee$Params {
  if (!params) {
    return {} as EmployeesUpdateSignedEmployee$Params;
  }
  return {
      id: params.id,
      body: apiUpdateSignedEmployeeDtoAdapter(params.body),
  };
}

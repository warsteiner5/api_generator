import { Employee } from '../../models/employee.interface';
import { EmployeesUpdate$Params } from '../../../swagger/fn/employees/employees-update';
import { apiEmployeeDtoAdapter } from '../../adapters/models/api-employee-dto.adapter';

// @ts-ignore
export interface EmployeesUpdateParams {
  id: number;
  body?: Employee;
}

export function employeesUpdateAdapter(params?: EmployeesUpdateParams): EmployeesUpdate$Params {
  if (!params) {
    return {} as EmployeesUpdate$Params;
  }
  return {
      id: params.id,
      body: apiEmployeeDtoAdapter(params.body),
  };
}

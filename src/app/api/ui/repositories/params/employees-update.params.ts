import { Employee } from '../../models/employee.interface';
import { EmployeesUpdate$Params } from '../../../swagger/fn/employees/employees-update';
import { adaptApiEmployeeDto } from '../../adapters/toDto/api-employee-dto.adapter';

export interface EmployeesUpdateParams {
  id: number;
  body?: Employee;
}

export const employeesUpdateParamsAdapter = {
  adapt(params?: EmployeesUpdateParams): EmployeesUpdate$Params {
    if (!params) {
      return {} as EmployeesUpdate$Params;
    }
    return {
      id: params.id,
      body: adaptApiEmployeeDto(params.body),
    };
  }
};

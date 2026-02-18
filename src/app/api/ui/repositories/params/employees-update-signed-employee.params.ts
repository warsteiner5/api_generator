import { EmployeesUpdateSignedEmployee$Params } from '../../../swagger/fn/employees/employees-update-signed-employee';
import { UpdateSignedEmployee } from '../../models/update-signed-employee.interface';
import { adaptApiUpdateSignedEmployeeDto } from '../../adapters/toDto/api-update-signed-employee-dto.adapter';

export interface EmployeesUpdateSignedEmployeeParams {
  id: number;
  body?: UpdateSignedEmployee;
}

export const employeesUpdateSignedEmployeeParamsAdapter = {
  adapt(params?: EmployeesUpdateSignedEmployeeParams): EmployeesUpdateSignedEmployee$Params {
    if (!params) {
      return {} as EmployeesUpdateSignedEmployee$Params;
    }
    return {
      id: params.id,
      body: adaptApiUpdateSignedEmployeeDto(params.body),
    };
  }
};

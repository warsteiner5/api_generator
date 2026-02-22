import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { EmployeesGetEmployeeDataToSign$Params } from '../../../swagger/fn/employees/employees-get-employee-data-to-sign';
import { apiEmployeeDataToSignRequestAltDtoAdapter } from '../../adapters/models/api-employee-data-to-sign-request.adapter';

// @ts-ignore
export interface EmployeesGetEmployeeDataToSignParams {
  id: number;
  body?: EmployeeDataToSignRequestAlt;
}

export function employeesGetEmployeeDataToSignAdapter(params?: EmployeesGetEmployeeDataToSignParams): EmployeesGetEmployeeDataToSign$Params {
  if (!params) {
    return {} as EmployeesGetEmployeeDataToSign$Params;
  }
  return {
      id: params.id,
      body: apiEmployeeDataToSignRequestAltDtoAdapter(params.body),
  };
}

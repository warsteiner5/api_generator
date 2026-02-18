import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { EmployeesGetEmployeeDataToSign$Params } from '../../../swagger/fn/employees/employees-get-employee-data-to-sign';
import { adaptApiEmployeeDataToSignRequestAltDto } from '../../adapters/toDto/api-employee-data-to-sign-request.adapter';

export interface EmployeesGetEmployeeDataToSignParams {
  id: number;
  body?: EmployeeDataToSignRequestAlt;
}

export const employeesGetEmployeeDataToSignParamsAdapter = {
  adapt(params?: EmployeesGetEmployeeDataToSignParams): EmployeesGetEmployeeDataToSign$Params {
    if (!params) {
      return {} as EmployeesGetEmployeeDataToSign$Params;
    }
    return {
      id: params.id,
      body: adaptApiEmployeeDataToSignRequestAltDto(params.body),
    };
  }
};

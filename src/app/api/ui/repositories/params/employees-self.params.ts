import { EmployeesSelf$Params } from '../../../swagger/fn/employees/employees-self';

export interface EmployeesSelfParams {
}

export const employeesSelfParamsAdapter = {
  adapt(params?: EmployeesSelfParams): EmployeesSelf$Params {
    if (!params) {
      return {} as EmployeesSelf$Params;
    }
    return {
    };
  }
};

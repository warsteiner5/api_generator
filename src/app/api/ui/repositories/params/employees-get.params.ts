import { EmployeesGet$Params } from '../../../swagger/fn/employees/employees-get';

export interface EmployeesGetParams {
  id: number;
}

export const employeesGetParamsAdapter = {
  adapt(params?: EmployeesGetParams): EmployeesGet$Params {
    if (!params) {
      return {} as EmployeesGet$Params;
    }
    return {
      id: params.id,
    };
  }
};

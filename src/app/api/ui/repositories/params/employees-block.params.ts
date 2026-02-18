import { EmployeesBlock$Params } from '../../../swagger/fn/employees/employees-block';

export interface EmployeesBlockParams {
  id: number;
}

export const employeesBlockParamsAdapter = {
  adapt(params?: EmployeesBlockParams): EmployeesBlock$Params {
    if (!params) {
      return {} as EmployeesBlock$Params;
    }
    return {
      id: params.id,
    };
  }
};

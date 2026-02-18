import { EmployeesUnblock$Params } from '../../../swagger/fn/employees/employees-unblock';

export interface EmployeesUnblockParams {
  id: number;
}

export const employeesUnblockParamsAdapter = {
  adapt(params?: EmployeesUnblockParams): EmployeesUnblock$Params {
    if (!params) {
      return {} as EmployeesUnblock$Params;
    }
    return {
      id: params.id,
    };
  }
};

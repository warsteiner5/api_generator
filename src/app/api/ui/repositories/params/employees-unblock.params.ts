import { EmployeesUnblock$Params } from '../../../swagger/fn/employees/employees-unblock';

// @ts-ignore
export interface EmployeesUnblockParams {
  id: number;
}

export function employeesUnblockAdapter(params?: EmployeesUnblockParams): EmployeesUnblock$Params {
  if (!params) {
    return {} as EmployeesUnblock$Params;
  }
  return {
      id: params.id,
  };
}

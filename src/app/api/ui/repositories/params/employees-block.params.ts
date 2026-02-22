import { EmployeesBlock$Params } from '../../../swagger/fn/employees/employees-block';

// @ts-ignore
export interface EmployeesBlockParams {
  id: number;
}

export function employeesBlockAdapter(params?: EmployeesBlockParams): EmployeesBlock$Params {
  if (!params) {
    return {} as EmployeesBlock$Params;
  }
  return {
      id: params.id,
  };
}

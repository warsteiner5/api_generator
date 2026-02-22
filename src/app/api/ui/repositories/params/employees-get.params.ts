import { EmployeesGet$Params } from '../../../swagger/fn/employees/employees-get';

// @ts-ignore
export interface EmployeesGetParams {
  id: number;
}

export function employeesGetAdapter(params?: EmployeesGetParams): EmployeesGet$Params {
  if (!params) {
    return {} as EmployeesGet$Params;
  }
  return {
      id: params.id,
  };
}

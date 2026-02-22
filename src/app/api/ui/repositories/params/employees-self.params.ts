import { EmployeesSelf$Params } from '../../../swagger/fn/employees/employees-self';

// @ts-ignore
export interface EmployeesSelfParams {
}

export function employeesSelfAdapter(params?: EmployeesSelfParams): EmployeesSelf$Params {
  if (!params) {
    return {} as EmployeesSelf$Params;
  }
  return {
  };
}

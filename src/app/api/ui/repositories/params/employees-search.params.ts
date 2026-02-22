import { EmployeesSearch$Params } from '../../../swagger/fn/employees/employees-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface EmployeesSearchParams {
  body?: SearchObjectAlt;
}

export function employeesSearchAdapter(params?: EmployeesSearchParams): EmployeesSearch$Params {
  if (!params) {
    return {} as EmployeesSearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

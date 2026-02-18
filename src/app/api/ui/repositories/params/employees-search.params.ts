import { EmployeesSearch$Params } from '../../../swagger/fn/employees/employees-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface EmployeesSearchParams {
  body?: SearchObjectAlt;
}

export const employeesSearchParamsAdapter = {
  adapt(params?: EmployeesSearchParams): EmployeesSearch$Params {
    if (!params) {
      return {} as EmployeesSearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

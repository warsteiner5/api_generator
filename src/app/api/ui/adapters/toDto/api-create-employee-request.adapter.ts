import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { ApiCreateEmployeeRequestAltDto } from '../../../swagger/models/api-create-employee-request';
import { adaptApiEmployeeDto2 } from './api-employee-dto-2.adapter';

export function adaptApiCreateEmployeeRequestAltDto(source?: CreateEmployeeRequestAlt | null): ApiCreateEmployeeRequestAltDto {
  return {
    Employee: adaptApiEmployeeDto2(source?.employee),
    OrganizationId: source?.organizationId,
  };
}

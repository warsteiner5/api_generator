import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { ApiCreateEmployeeRequestAltDto } from '../../../swagger/models/api-create-employee-request';
import { apiEmployeeDto2Adapter } from './api-employee-dto-2.adapter';

export const apiCreateEmployeeRequestAltDtoAdapter = (source?: CreateEmployeeRequestAlt | null): ApiCreateEmployeeRequestAltDto => {
  return {
    Employee: source?.employee === null ? undefined : apiEmployeeDto2Adapter(source?.employee),
    OrganizationId: source?.organizationId,
  };
}

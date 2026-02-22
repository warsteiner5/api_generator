import { ApiCreateEmployeeRequestAltDto } from '../../../swagger/models/api-create-employee-request';
import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { employeeDto2Adapter } from './employee-dto-2.adapter';

export const createEmployeeRequestAltAdapter = (source?: ApiCreateEmployeeRequestAltDto | null): CreateEmployeeRequestAlt => {
  return {
    employee: source?.Employee === null ? undefined : employeeDto2Adapter(source?.Employee),
    organizationId: source?.OrganizationId,
  };
}

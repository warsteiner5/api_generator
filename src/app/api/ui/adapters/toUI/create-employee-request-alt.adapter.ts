import { ApiCreateEmployeeRequestAltDto } from '../../../swagger/models/api-create-employee-request';
import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { adaptEmployeeDto2ToUI } from './employee-dto-2.adapter';

export function adaptCreateEmployeeRequestAltToUI(source?: ApiCreateEmployeeRequestAltDto | null): CreateEmployeeRequestAlt {
  return {
    employee: adaptEmployeeDto2ToUI(source?.Employee),
    organizationId: source?.OrganizationId ?? 0,
  };
}

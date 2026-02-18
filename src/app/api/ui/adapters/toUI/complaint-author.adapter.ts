import { ApiComplaintAuthorDto } from '../../../swagger/models/api-complaint-author-dto';
import { ComplaintAuthor } from '../../models/complaint-author.interface';

export function adaptComplaintAuthorToUI(source?: ApiComplaintAuthorDto | null): ComplaintAuthor {
  return {
    employeeId: source?.EmployeeId ?? 0,
    firstName: source?.FirstName ?? '',
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    organizationGuid: source?.OrganizationGuid ?? '',
    organizationId: source?.OrganizationId ?? 0,
    organizationName: source?.OrganizationName ?? '',
    userId: source?.UserId ?? 0,
  };
}

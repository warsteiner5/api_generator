import { ApiComplaintAuthorDto } from '../../../swagger/models/api-complaint-author-dto';
import { ComplaintAuthor } from '../../models/complaint-author.interface';

export const complaintAuthorAdapter = (source?: ApiComplaintAuthorDto | null): ComplaintAuthor => {
  return {
    employeeId: source?.EmployeeId,
    firstName: source?.FirstName,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    organizationGuid: source?.OrganizationGuid,
    organizationId: source?.OrganizationId,
    organizationName: source?.OrganizationName,
    userId: source?.UserId,
  };
}

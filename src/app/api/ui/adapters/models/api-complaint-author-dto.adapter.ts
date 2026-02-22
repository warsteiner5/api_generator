import { ComplaintAuthor } from '../../models/complaint-author.interface';
import { ApiComplaintAuthorDto } from '../../../swagger/models/api-complaint-author-dto';

export const apiComplaintAuthorDtoAdapter = (source?: ComplaintAuthor | null): ApiComplaintAuthorDto => {
  return {
    EmployeeId: source?.employeeId,
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    OrganizationGuid: source?.organizationGuid,
    OrganizationId: source?.organizationId,
    OrganizationName: source?.organizationName,
    UserId: source?.userId,
  };
}

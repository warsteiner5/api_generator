import { ApiForeignOrganizationDto } from '../../../swagger/models/api-foreign-organization-dto';
import { ForeignOrganization } from '../../models/foreign-organization.interface';

export const foreignOrganizationAdapter = (source?: ApiForeignOrganizationDto | null): ForeignOrganization => {
  return {
    contactPerson: source?.ContactPerson,
    email: source?.Email,
    externalOrganizationId: source?.ExternalOrganizationId,
    foreignParticipantId1: source?.ForeignParticipantId1,
    fullName: source?.FullName,
    guid: source?.Guid,
    name: source?.Name,
    organizationType: source?.OrganizationType,
    phoneNumber: source?.PhoneNumber,
    source: source?.Source,
    timeZoneId: source?.TimeZoneId,
    webSiteUrl: source?.WebSiteUrl,
  };
}

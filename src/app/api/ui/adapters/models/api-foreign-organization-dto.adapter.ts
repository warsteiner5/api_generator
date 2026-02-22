import { ForeignOrganization } from '../../models/foreign-organization.interface';
import { ApiForeignOrganizationDto } from '../../../swagger/models/api-foreign-organization-dto';

export const apiForeignOrganizationDtoAdapter = (source?: ForeignOrganization | null): ApiForeignOrganizationDto => {
  return {
    ContactPerson: source?.contactPerson,
    Email: source?.email,
    ExternalOrganizationId: source?.externalOrganizationId,
    ForeignParticipantId1: source?.foreignParticipantId1,
    FullName: source?.fullName,
    Guid: source?.guid,
    Name: source?.name,
    OrganizationType: source?.organizationType,
    PhoneNumber: source?.phoneNumber,
    Source: source?.source,
    TimeZoneId: source?.timeZoneId,
    WebSiteUrl: source?.webSiteUrl,
  };
}

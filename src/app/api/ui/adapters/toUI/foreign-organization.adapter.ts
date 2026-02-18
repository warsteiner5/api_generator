import { ApiForeignOrganizationDto } from '../../../swagger/models/api-foreign-organization-dto';
import { ForeignOrganization } from '../../models/foreign-organization.interface';

export function adaptForeignOrganizationToUI(source?: ApiForeignOrganizationDto | null): ForeignOrganization {
  return {
    contactPerson: source?.ContactPerson ?? '',
    email: source?.Email ?? '',
    externalOrganizationId: source?.ExternalOrganizationId ?? '',
    foreignParticipantId1: source?.ForeignParticipantId1 ?? '',
    fullName: source?.FullName ?? '',
    guid: source?.Guid ?? '',
    name: source?.Name ?? '',
    organizationType: source?.OrganizationType ?? 0,
    phoneNumber: source?.PhoneNumber ?? '',
    source: source?.Source ?? 0,
    timeZoneId: source?.TimeZoneId ?? 0,
    webSiteUrl: source?.WebSiteUrl ?? '',
  };
}

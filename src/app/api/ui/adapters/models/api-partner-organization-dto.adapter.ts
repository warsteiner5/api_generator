import { PartnerOrganization } from '../../models/partner-organization.interface';
import { ApiPartnerOrganizationDto } from '../../../swagger/models/api-partner-organization-dto';

export const apiPartnerOrganizationDtoAdapter = (source?: PartnerOrganization | null): ApiPartnerOrganizationDto => {
  return {
    Guid: source?.guid,
    Name: source?.name,
  };
}

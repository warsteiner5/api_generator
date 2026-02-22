import { ApiPartnerOrganizationDto } from '../../../swagger/models/api-partner-organization-dto';
import { PartnerOrganization } from '../../models/partner-organization.interface';

export const partnerOrganizationAdapter = (source?: ApiPartnerOrganizationDto | null): PartnerOrganization => {
  return {
    guid: source?.Guid,
    name: source?.Name,
  };
}

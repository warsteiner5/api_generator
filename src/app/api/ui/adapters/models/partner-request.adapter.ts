import { ApiPartnerRequestDto } from '../../../swagger/models/api-partner-request-dto';
import { PartnerRequest } from '../../models/partner-request.interface';

export const partnerRequestAdapter = (source?: ApiPartnerRequestDto | null): PartnerRequest => {
  return {
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    organizationRecipientGuid: source?.OrganizationRecipientGuid,
  };
}

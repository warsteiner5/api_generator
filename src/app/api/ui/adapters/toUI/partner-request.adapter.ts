import { ApiPartnerRequestDto } from '../../../swagger/models/api-partner-request-dto';
import { PartnerRequest } from '../../models/partner-request.interface';

export function adaptPartnerRequestToUI(source?: ApiPartnerRequestDto | null): PartnerRequest {
  return {
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    organizationRecipientGuid: source?.OrganizationRecipientGuid ?? '',
  };
}

import { ApiPartnerDto } from '../../../swagger/models/api-partner-dto';
import { Partner } from '../../models/partner.interface';

export const partnerAdapter = (source?: ApiPartnerDto | null): Partner => {
  return {
    guid: source?.Guid,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    status: source?.Status,
  };
}

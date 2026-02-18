import { ApiPartnerDto } from '../../../swagger/models/api-partner-dto';
import { Partner } from '../../models/partner.interface';

export function adaptPartnerToUI(source?: ApiPartnerDto | null): Partner {
  return {
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    status: source?.Status ?? false,
  };
}

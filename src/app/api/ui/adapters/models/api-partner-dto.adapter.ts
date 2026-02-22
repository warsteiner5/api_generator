import { Partner } from '../../models/partner.interface';
import { ApiPartnerDto } from '../../../swagger/models/api-partner-dto';

export const apiPartnerDtoAdapter = (source?: Partner | null): ApiPartnerDto => {
  return {
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    Status: source?.status,
  };
}

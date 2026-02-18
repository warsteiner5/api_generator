import { PartnerRequest } from '../../models/partner-request.interface';
import { ApiPartnerRequestDto } from '../../../swagger/models/api-partner-request-dto';

export function adaptApiPartnerRequestDto(source?: PartnerRequest | null): ApiPartnerRequestDto {
  return {
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    OrganizationRecipientGuid: source?.organizationRecipientGuid,
  };
}

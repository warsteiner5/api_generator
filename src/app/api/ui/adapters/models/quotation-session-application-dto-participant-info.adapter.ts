import { ApiQuotationSessionApplicationDtoParticipantInfoDto } from '../../../swagger/models/api-quotation-session-application-dto-participant-info-dto';
import { QuotationSessionApplicationDtoParticipantInfo } from '../../models/quotation-session-application-dto-participant-info.interface';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';

export const quotationSessionApplicationDtoParticipantInfoAdapter = (source?: ApiQuotationSessionApplicationDtoParticipantInfoDto | null): QuotationSessionApplicationDtoParticipantInfo => {
  return {
    address: source?.Address,
    country: source?.Country === null ? undefined : organizationCountryAltEnumAdapter(source?.Country),
    email: source?.Email,
    foreignParticipantId: source?.ForeignParticipantId,
    inn: source?.Inn,
    isSmp: source?.IsSmp,
    kpp: source?.Kpp,
    ogrn: source?.Ogrn,
    organizationGuid: source?.OrganizationGuid,
    phoneNumber: source?.PhoneNumber,
    postAddress: source?.PostAddress,
  };
}

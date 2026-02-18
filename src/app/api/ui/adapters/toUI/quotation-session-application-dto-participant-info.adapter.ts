import { ApiQuotationSessionApplicationDtoParticipantInfoDto } from '../../../swagger/models/api-quotation-session-application-dto-participant-info-dto';
import { QuotationSessionApplicationDtoParticipantInfo } from '../../models/quotation-session-application-dto-participant-info.interface';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';

export function adaptQuotationSessionApplicationDtoParticipantInfoToUI(source?: ApiQuotationSessionApplicationDtoParticipantInfoDto | null): QuotationSessionApplicationDtoParticipantInfo {
  return {
    address: source?.Address ?? '',
    country: adaptOrganizationCountryAltEnumToUI(source?.Country),
    email: source?.Email ?? '',
    foreignParticipantId: source?.ForeignParticipantId ?? '',
    inn: source?.Inn ?? '',
    isSmp: source?.IsSmp ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    organizationGuid: source?.OrganizationGuid ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    postAddress: source?.PostAddress ?? '',
  };
}

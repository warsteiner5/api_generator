import { QuotationSessionApplicationDtoParticipantInfo } from '../../models/quotation-session-application-dto-participant-info.interface';
import { ApiQuotationSessionApplicationDtoParticipantInfoDto } from '../../../swagger/models/api-quotation-session-application-dto-participant-info-dto';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';

export function adaptApiQuotationSessionApplicationDtoParticipantInfoDto(source?: QuotationSessionApplicationDtoParticipantInfo | null): ApiQuotationSessionApplicationDtoParticipantInfoDto {
  return {
    Address: source?.address,
    Country: adaptApiOrganizationCountryAltEnum(source?.country),
    Email: source?.email,
    ForeignParticipantId: source?.foreignParticipantId,
    Inn: source?.inn,
    IsSmp: source?.isSmp,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    OrganizationGuid: source?.organizationGuid,
    PhoneNumber: source?.phoneNumber,
    PostAddress: source?.postAddress,
  };
}

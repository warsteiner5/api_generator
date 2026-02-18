import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';

export interface QuotationSessionApplicationDtoParticipantInfo {
  address: string;
  country: OrganizationCountryAltEnum;
  email: string;
  foreignParticipantId: string;
  inn: string;
  isSmp: boolean;
  kpp: string;
  ogrn: string;
  organizationGuid: string;
  phoneNumber: string;
  postAddress: string;
}

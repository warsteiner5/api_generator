import { MarketJsonResultOfListOfOrganizationRegistrationAgreementFile } from '../../models/market-json-result-of-list-of-organization-registration-agreement-file.interface';
import { ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-market-json-result-of-list-of-organization-registration-agreement-file-dto';

export function adaptApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto(source?: MarketJsonResultOfListOfOrganizationRegistrationAgreementFile | null): ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto;
}

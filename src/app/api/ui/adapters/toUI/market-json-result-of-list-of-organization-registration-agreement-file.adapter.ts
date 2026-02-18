import { ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-market-json-result-of-list-of-organization-registration-agreement-file-dto';
import { MarketJsonResultOfListOfOrganizationRegistrationAgreementFile } from '../../models/market-json-result-of-list-of-organization-registration-agreement-file.interface';

export function adaptMarketJsonResultOfListOfOrganizationRegistrationAgreementFileToUI(source?: ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto | null): MarketJsonResultOfListOfOrganizationRegistrationAgreementFile {
  return (source ?? {}) as MarketJsonResultOfListOfOrganizationRegistrationAgreementFile;
}

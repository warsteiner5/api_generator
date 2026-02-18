import { MarketJsonResultOfCertificateOrganizationDtoOf } from '../../models/market-json-result-of-certificate-organization-dto-of.interface';
import { ApiMarketJsonResultOfCertificateOrganizationDtoOf } from '../../../swagger/models/api-market-json-result-of-certificate-organization-dto-of';

export function adaptApiMarketJsonResultOfCertificateOrganizationDtoOf(source?: MarketJsonResultOfCertificateOrganizationDtoOf | null): ApiMarketJsonResultOfCertificateOrganizationDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfCertificateOrganizationDtoOf;
}

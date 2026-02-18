import { ApiMarketJsonResultOfCertificateOrganizationDtoOf } from '../../../swagger/models/api-market-json-result-of-certificate-organization-dto-of';
import { MarketJsonResultOfCertificateOrganizationDtoOf } from '../../models/market-json-result-of-certificate-organization-dto-of.interface';

export function adaptMarketJsonResultOfCertificateOrganizationDtoOfToUI(source?: ApiMarketJsonResultOfCertificateOrganizationDtoOf | null): MarketJsonResultOfCertificateOrganizationDtoOf {
  return (source ?? {}) as MarketJsonResultOfCertificateOrganizationDtoOf;
}

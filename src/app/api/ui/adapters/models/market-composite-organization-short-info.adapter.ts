import { ApiMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-composite-organization-short-info-dto';
import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { addressAdapter } from './address.adapter';

export const marketCompositeOrganizationShortInfoAdapter = (source?: ApiMarketCompositeOrganizationShortInfoDto | null): MarketCompositeOrganizationShortInfo => {
  return {
    legalAddress: source?.LegalAddress === null ? undefined : addressAdapter(source?.LegalAddress),
    okopf: source?.Okopf,
    okpo: source?.Okpo,
    oktmo: source?.Oktmo,
    registrationDate: source?.RegistrationDate,
  };
}

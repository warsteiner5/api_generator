import { ApiMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-composite-organization-short-info-dto';
import { MarketCompositeOrganizationShortInfo } from '../../models/market-composite-organization-short-info.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptMarketCompositeOrganizationShortInfoToUI(source?: ApiMarketCompositeOrganizationShortInfoDto | null): MarketCompositeOrganizationShortInfo {
  return {
    legalAddress: adaptAddressToUI(source?.LegalAddress),
    okopf: source?.Okopf ?? '',
    okpo: source?.Okpo ?? '',
    oktmo: source?.Oktmo ?? '',
    registrationDate: source?.RegistrationDate ?? '',
  };
}

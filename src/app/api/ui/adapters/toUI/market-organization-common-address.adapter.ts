import { ApiMarketOrganizationCommonAddressDto } from '../../../swagger/models/api-market-organization-common-address-dto';
import { MarketOrganizationCommonAddress } from '../../models/market-organization-common-address.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptMarketOrganizationCommonAddressToUI(source?: ApiMarketOrganizationCommonAddressDto | null): MarketOrganizationCommonAddress {
  return {
    addressesSimilar: source?.AddressesSimilar ?? false,
    homeRegion: source?.HomeRegion ?? '',
    legalAddress: adaptAddressToUI(source?.LegalAddress),
    postAddress: adaptAddressToUI(source?.PostAddress),
  };
}

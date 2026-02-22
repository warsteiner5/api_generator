import { ApiMarketOrganizationCommonAddressDto } from '../../../swagger/models/api-market-organization-common-address-dto';
import { MarketOrganizationCommonAddress } from '../../models/market-organization-common-address.interface';
import { addressAdapter } from './address.adapter';

export const marketOrganizationCommonAddressAdapter = (source?: ApiMarketOrganizationCommonAddressDto | null): MarketOrganizationCommonAddress => {
  return {
    addressesSimilar: source?.AddressesSimilar,
    homeRegion: source?.HomeRegion,
    legalAddress: source?.LegalAddress === null ? undefined : addressAdapter(source?.LegalAddress),
    postAddress: source?.PostAddress === null ? undefined : addressAdapter(source?.PostAddress),
  };
}

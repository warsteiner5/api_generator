import { MarketOrganizationCommonAddress } from '../../models/market-organization-common-address.interface';
import { ApiMarketOrganizationCommonAddressDto } from '../../../swagger/models/api-market-organization-common-address-dto';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';

export const apiMarketOrganizationCommonAddressDtoAdapter = (source?: MarketOrganizationCommonAddress | null): ApiMarketOrganizationCommonAddressDto => {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeRegion: source?.homeRegion,
    LegalAddress: source?.legalAddress === null ? undefined : apiAddressDtoAdapter(source?.legalAddress),
    PostAddress: source?.postAddress === null ? undefined : apiAddressDtoAdapter(source?.postAddress),
  };
}

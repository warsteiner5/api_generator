import { MarketOrganizationCommonAddress } from '../../models/market-organization-common-address.interface';
import { ApiMarketOrganizationCommonAddressDto } from '../../../swagger/models/api-market-organization-common-address-dto';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiMarketOrganizationCommonAddressDto(source?: MarketOrganizationCommonAddress | null): ApiMarketOrganizationCommonAddressDto {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeRegion: source?.homeRegion,
    LegalAddress: adaptApiAddressDto(source?.legalAddress),
    PostAddress: adaptApiAddressDto(source?.postAddress),
  };
}

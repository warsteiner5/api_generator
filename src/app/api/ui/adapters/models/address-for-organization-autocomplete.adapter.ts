import { ApiAddressForOrganizationAutocompleteDto } from '../../../swagger/models/api-address-for-organization-autocomplete-dto';
import { AddressForOrganizationAutocomplete } from '../../models/address-for-organization-autocomplete.interface';

export const addressForOrganizationAutocompleteAdapter = (source?: ApiAddressForOrganizationAutocompleteDto | null): AddressForOrganizationAutocomplete => {
  return {
    fullAddress: source?.FullAddress,
    fullPostAddress: source?.FullPostAddress,
    id: source?.Id,
    kladrCodeRegionRF: source?.KladrCodeRegionRF,
    kladrNameRegionRF: source?.KladrNameRegionRF,
    okato: source?.Okato,
    postIndex: source?.PostIndex,
    regionRF: source?.RegionRF,
  };
}

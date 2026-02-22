import { AddressForOrganizationAutocomplete } from '../../models/address-for-organization-autocomplete.interface';
import { ApiAddressForOrganizationAutocompleteDto } from '../../../swagger/models/api-address-for-organization-autocomplete-dto';

export const apiAddressForOrganizationAutocompleteDtoAdapter = (source?: AddressForOrganizationAutocomplete | null): ApiAddressForOrganizationAutocompleteDto => {
  return {
    FullAddress: source?.fullAddress,
    FullPostAddress: source?.fullPostAddress,
    Id: source?.id,
    KladrCodeRegionRF: source?.kladrCodeRegionRF,
    KladrNameRegionRF: source?.kladrNameRegionRF,
    Okato: source?.okato,
    PostIndex: source?.postIndex,
    RegionRF: source?.regionRF,
  };
}

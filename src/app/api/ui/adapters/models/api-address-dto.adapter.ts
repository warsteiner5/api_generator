import { Address } from '../../models/address.interface';
import { ApiAddressDto } from '../../../swagger/models/api-address-dto';

export const apiAddressDtoAdapter = (source?: Address | null): ApiAddressDto => {
  return {
    Area: source?.area,
    City: source?.city,
    Country: source?.country,
    CountryCode: source?.countryCode,
    District: source?.district,
    FullAddress: source?.fullAddress,
    FullPostAddress: source?.fullPostAddress,
    Home: source?.home,
    Id: source?.id,
    KladrCodeArea: source?.kladrCodeArea,
    KladrCodeCity: source?.kladrCodeCity,
    KladrCodePopulatedLocality: source?.kladrCodePopulatedLocality,
    KladrCodeRegionRF: source?.kladrCodeRegionRF,
    KladrCodeStreet: source?.kladrCodeStreet,
    LocationAddress: source?.locationAddress,
    Office: source?.office,
    Okato: source?.okato,
    PopulatedLocality: source?.populatedLocality,
    PostIndex: source?.postIndex,
    RegionRF: source?.regionRF,
    Street: source?.street,
  };
}

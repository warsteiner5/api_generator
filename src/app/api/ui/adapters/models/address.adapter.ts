import { ApiAddressDto } from '../../../swagger/models/api-address-dto';
import { Address } from '../../models/address.interface';

export const addressAdapter = (source?: ApiAddressDto | null): Address => {
  return {
    area: source?.Area,
    city: source?.City,
    country: source?.Country,
    countryCode: source?.CountryCode,
    district: source?.District,
    fullAddress: source?.FullAddress,
    fullPostAddress: source?.FullPostAddress,
    home: source?.Home,
    id: source?.Id,
    kladrCodeArea: source?.KladrCodeArea,
    kladrCodeCity: source?.KladrCodeCity,
    kladrCodePopulatedLocality: source?.KladrCodePopulatedLocality,
    kladrCodeRegionRF: source?.KladrCodeRegionRF,
    kladrCodeStreet: source?.KladrCodeStreet,
    locationAddress: source?.LocationAddress,
    office: source?.Office,
    okato: source?.Okato,
    populatedLocality: source?.PopulatedLocality,
    postIndex: source?.PostIndex,
    regionRF: source?.RegionRF,
    street: source?.Street,
  };
}

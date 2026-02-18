import { MarketJsonResultOfIReadOnlyCollectionOfCountry } from '../../models/market-json-result-of-i-read-only-collection-of-country.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-country-dto';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto(source?: MarketJsonResultOfIReadOnlyCollectionOfCountry | null): ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto;
}

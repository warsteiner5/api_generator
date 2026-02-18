import { ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-country-dto';
import { MarketJsonResultOfIReadOnlyCollectionOfCountry } from '../../models/market-json-result-of-i-read-only-collection-of-country.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfCountryToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto | null): MarketJsonResultOfIReadOnlyCollectionOfCountry {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfCountry;
}

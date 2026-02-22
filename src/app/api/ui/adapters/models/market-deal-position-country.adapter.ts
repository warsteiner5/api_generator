import { ApiMarketDealPositionCountryDto } from '../../../swagger/models/api-market-deal-position-country-dto';
import { MarketDealPositionCountry } from '../../models/market-deal-position-country.interface';

export const marketDealPositionCountryAdapter = (source?: ApiMarketDealPositionCountryDto | null): MarketDealPositionCountry => {
  return {
    code: source?.Code,
    name: source?.Name,
  };
}

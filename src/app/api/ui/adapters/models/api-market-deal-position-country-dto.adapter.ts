import { MarketDealPositionCountry } from '../../models/market-deal-position-country.interface';
import { ApiMarketDealPositionCountryDto } from '../../../swagger/models/api-market-deal-position-country-dto';

export const apiMarketDealPositionCountryDtoAdapter = (source?: MarketDealPositionCountry | null): ApiMarketDealPositionCountryDto => {
  return {
    Code: source?.code,
    Name: source?.name,
  };
}

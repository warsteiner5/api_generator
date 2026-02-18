import { MarketJsonResultOfDealFullPriceChange } from '../../models/market-json-result-of-deal-full-price-change.interface';
import { ApiMarketJsonResultOfDealFullPriceChangeDto } from '../../../swagger/models/api-market-json-result-of-deal-full-price-change-dto';

export function adaptApiMarketJsonResultOfDealFullPriceChangeDto(source?: MarketJsonResultOfDealFullPriceChange | null): ApiMarketJsonResultOfDealFullPriceChangeDto {
  return (source ?? {}) as ApiMarketJsonResultOfDealFullPriceChangeDto;
}

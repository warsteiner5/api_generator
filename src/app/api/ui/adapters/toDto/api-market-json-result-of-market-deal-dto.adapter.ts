import { MarketJsonResultOfMarketDeal } from '../../models/market-json-result-of-market-deal.interface';
import { ApiMarketJsonResultOfMarketDealDto } from '../../../swagger/models/api-market-json-result-of-market-deal-dto';

export function adaptApiMarketJsonResultOfMarketDealDto(source?: MarketJsonResultOfMarketDeal | null): ApiMarketJsonResultOfMarketDealDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketDealDto;
}

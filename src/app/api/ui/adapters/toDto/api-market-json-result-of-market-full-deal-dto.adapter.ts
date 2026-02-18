import { MarketJsonResultOfMarketFullDeal } from '../../models/market-json-result-of-market-full-deal.interface';
import { ApiMarketJsonResultOfMarketFullDealDto } from '../../../swagger/models/api-market-json-result-of-market-full-deal-dto';

export function adaptApiMarketJsonResultOfMarketFullDealDto(source?: MarketJsonResultOfMarketFullDeal | null): ApiMarketJsonResultOfMarketFullDealDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketFullDealDto;
}

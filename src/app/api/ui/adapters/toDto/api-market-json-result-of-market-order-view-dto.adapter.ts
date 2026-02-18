import { MarketJsonResultOfMarketOrderView } from '../../models/market-json-result-of-market-order-view.interface';
import { ApiMarketJsonResultOfMarketOrderViewDto } from '../../../swagger/models/api-market-json-result-of-market-order-view-dto';

export function adaptApiMarketJsonResultOfMarketOrderViewDto(source?: MarketJsonResultOfMarketOrderView | null): ApiMarketJsonResultOfMarketOrderViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrderViewDto;
}

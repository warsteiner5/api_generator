import { MarketOrderView } from '../../models/market-order-view.interface';
import { ApiMarketOrderViewDto } from '../../../swagger/models/api-market-order-view-dto';

export const apiMarketOrderViewDtoAdapter = (source?: MarketOrderView | null): ApiMarketOrderViewDto => {
  return (source ?? {}) as ApiMarketOrderViewDto;
}

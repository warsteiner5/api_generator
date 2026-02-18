import { ApiTradePlanLotItemMarketDto } from '../../../swagger/models/api-trade-plan-lot-item-market-dto';
import { TradePlanLotItemMarket } from '../../models/trade-plan-lot-item-market.interface';

export function adaptTradePlanLotItemMarketToUI(source?: ApiTradePlanLotItemMarketDto | null): TradePlanLotItemMarket {
  return (source ?? {}) as TradePlanLotItemMarket;
}

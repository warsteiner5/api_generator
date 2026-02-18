import { ApiTradePlanLotMarketDto } from '../../../swagger/models/api-trade-plan-lot-market-dto';
import { TradePlanLotMarket } from '../../models/trade-plan-lot-market.interface';

export function adaptTradePlanLotMarketToUI(source?: ApiTradePlanLotMarketDto | null): TradePlanLotMarket {
  return (source ?? {}) as TradePlanLotMarket;
}

import { TradePlanLotItemMarket } from '../../models/trade-plan-lot-item-market.interface';
import { ApiTradePlanLotItemMarketDto } from '../../../swagger/models/api-trade-plan-lot-item-market-dto';

export const apiTradePlanLotItemMarketDtoAdapter = (source?: TradePlanLotItemMarket | null): ApiTradePlanLotItemMarketDto => {
  return (source ?? {}) as ApiTradePlanLotItemMarketDto;
}

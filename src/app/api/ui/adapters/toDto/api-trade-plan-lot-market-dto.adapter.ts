import { TradePlanLotMarket } from '../../models/trade-plan-lot-market.interface';
import { ApiTradePlanLotMarketDto } from '../../../swagger/models/api-trade-plan-lot-market-dto';

export function adaptApiTradePlanLotMarketDto(source?: TradePlanLotMarket | null): ApiTradePlanLotMarketDto {
  return (source ?? {}) as ApiTradePlanLotMarketDto;
}

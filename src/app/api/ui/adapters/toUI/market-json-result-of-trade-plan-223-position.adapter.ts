import { ApiMarketJsonResultOfTradePlan223PositionDto } from '../../../swagger/models/api-market-json-result-of-trade-plan-223-position-dto';
import { MarketJsonResultOfTradePlan223Position } from '../../models/market-json-result-of-trade-plan-223-position.interface';

export function adaptMarketJsonResultOfTradePlan223PositionToUI(source?: ApiMarketJsonResultOfTradePlan223PositionDto | null): MarketJsonResultOfTradePlan223Position {
  return (source ?? {}) as MarketJsonResultOfTradePlan223Position;
}

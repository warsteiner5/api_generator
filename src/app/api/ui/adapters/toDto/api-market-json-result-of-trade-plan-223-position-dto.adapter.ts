import { MarketJsonResultOfTradePlan223Position } from '../../models/market-json-result-of-trade-plan-223-position.interface';
import { ApiMarketJsonResultOfTradePlan223PositionDto } from '../../../swagger/models/api-market-json-result-of-trade-plan-223-position-dto';

export function adaptApiMarketJsonResultOfTradePlan223PositionDto(source?: MarketJsonResultOfTradePlan223Position | null): ApiMarketJsonResultOfTradePlan223PositionDto {
  return (source ?? {}) as ApiMarketJsonResultOfTradePlan223PositionDto;
}

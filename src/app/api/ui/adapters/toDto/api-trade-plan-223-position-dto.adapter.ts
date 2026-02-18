import { TradePlan223Position } from '../../models/trade-plan-223-position.interface';
import { ApiTradePlan223PositionDto } from '../../../swagger/models/api-trade-plan-223-position-dto';
import { adaptApiTradePlan223PositionItemDto } from './api-trade-plan-223-position-item-dto.adapter';

export function adaptApiTradePlan223PositionDto(source?: TradePlan223Position | null): ApiTradePlan223PositionDto {
  return {
    Items: (source?.items ?? []).map((item) => adaptApiTradePlan223PositionItemDto(item)),
    PurchaseMethodCode: source?.purchaseMethodCode,
    StartPrice: source?.startPrice,
    Subject: source?.subject,
  };
}

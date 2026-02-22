import { TradePlan223Position } from '../../models/trade-plan-223-position.interface';
import { ApiTradePlan223PositionDto } from '../../../swagger/models/api-trade-plan-223-position-dto';
import { apiTradePlan223PositionItemDtoAdapter } from './api-trade-plan-223-position-item-dto.adapter';

export const apiTradePlan223PositionDtoAdapter = (source?: TradePlan223Position | null): ApiTradePlan223PositionDto => {
  return {
    Items: source?.items?.map((item) => apiTradePlan223PositionItemDtoAdapter(item)),
    PurchaseMethodCode: source?.purchaseMethodCode,
    StartPrice: source?.startPrice,
    Subject: source?.subject,
  };
}

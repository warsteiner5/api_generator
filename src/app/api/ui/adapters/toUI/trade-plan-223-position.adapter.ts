import { ApiTradePlan223PositionDto } from '../../../swagger/models/api-trade-plan-223-position-dto';
import { TradePlan223Position } from '../../models/trade-plan-223-position.interface';
import { adaptTradePlan223PositionItemToUI } from './trade-plan-223-position-item.adapter';

export function adaptTradePlan223PositionToUI(source?: ApiTradePlan223PositionDto | null): TradePlan223Position {
  return {
    items: (source?.Items ?? []).map((item) => adaptTradePlan223PositionItemToUI(item)),
    purchaseMethodCode: source?.PurchaseMethodCode ?? 0,
    startPrice: source?.StartPrice ?? 0,
    subject: source?.Subject ?? '',
  };
}

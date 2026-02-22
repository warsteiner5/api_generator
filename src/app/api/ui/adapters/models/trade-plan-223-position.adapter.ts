import { ApiTradePlan223PositionDto } from '../../../swagger/models/api-trade-plan-223-position-dto';
import { TradePlan223Position } from '../../models/trade-plan-223-position.interface';
import { tradePlan223PositionItemAdapter } from './trade-plan-223-position-item.adapter';

export const tradePlan223PositionAdapter = (source?: ApiTradePlan223PositionDto | null): TradePlan223Position => {
  return {
    items: source?.Items?.map((item) => tradePlan223PositionItemAdapter(item)),
    purchaseMethodCode: source?.PurchaseMethodCode,
    startPrice: source?.StartPrice,
    subject: source?.Subject,
  };
}

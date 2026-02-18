import { TradePlan223PositionItem } from './trade-plan-223-position-item.interface';

export interface TradePlan223Position {
  items: TradePlan223PositionItem[];
  purchaseMethodCode: number;
  startPrice: number;
  subject: string;
}

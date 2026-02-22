import { TradeBusinessFlowEnum } from '../enums/trade-business-flow.enum';

// @ts-ignore
export interface OrderGrid {
  flowType: TradeBusinessFlowEnum;
  id: number;
  orderName: string;
  orderState: string;
  price: number;
}

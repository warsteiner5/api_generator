import { MarketDealPosition } from './market-deal-position.interface';
import { MarketFullDeal } from './market-full-deal.interface';
import { OrderStateEnum } from '../enums/order-state.enum';

// @ts-ignore
export interface MarketFullOrderDeal extends MarketFullDeal {
  orderState: OrderStateEnum;
  mainPictureId: string;
  offerId: number;
  contractIsAcceptedByCustomer: boolean;
  dealPositions: MarketDealPosition[];
  tradePrice: number;
  dealPrice: number;
  isDifferencesProtocolAllowed: boolean;
  isDealPaperFormAllowed: boolean;
}

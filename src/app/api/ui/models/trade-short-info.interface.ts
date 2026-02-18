import { PurchaseMethodTypeEnum } from '../enums/purchase-method-type.enum';
import { TradeLot } from './trade-lot.interface';
import { TradeStateEnum } from '../enums/trade-state.enum';

export interface TradeShortInfo {
  conditionsOfPayment: string;
  externalSourcePlatformNumber: string;
  fillingApplicationEndDate: string;
  id: number;
  lots: TradeLot[];
  notificationNumber: string;
  organizerId: number;
  publicationDate: string;
  purchaseMethod: PurchaseMethodTypeEnum;
  tradeDescription: string;
  tradeState: TradeStateEnum;
}

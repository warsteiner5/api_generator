import { BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from './base-contract-dto-with-id-and-row-version-of-integer-and-integer.interface';
import { PurchasePlanKindAltEnum } from '../enums/purchase-plan-kind-alt.enum';
import { TradePlanLotItemMarket } from './trade-plan-lot-item-market.interface';

// @ts-ignore
export interface TradePlanLotMarket extends BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger {
  orderNumber: string;
  subject: string;
  startingPrice: number;
  startingPriceWithoutVat: number;
  planDepositPeriod: string;
  executionAgreementDate: string;
  methodPurchase: string;
  methodPurchaseCode: number;
  planNumber: string;
  planId: number;
  purchasePlanKind: PurchasePlanKindAltEnum;
  okato: string;
  regionName: string;
  items: TradePlanLotItemMarket[];
  guid: string;
  customerName: string;
  tradeId: number;
  tradeIds: number[];
  organizerId: number;
  organizerGuid: string;
  workGroups: number[];
  businessUnitCode: string;
  canCreateTrade: boolean;
}

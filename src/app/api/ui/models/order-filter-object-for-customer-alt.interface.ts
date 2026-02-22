import { OrderFilterObjectAlt } from './order-filter-object-alt.interface';
import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

// @ts-ignore
export interface OrderFilterObjectForCustomerAlt extends OrderFilterObjectAlt {
  participantNameOrInn: string;
  customerNameOrInn: string;
  showOnlyOwnOrder: boolean;
  orderSearchType: TradeSearchTypeEnum;
  showTradesCount: boolean;
  zmoFinanceSource: ZmoFinanceSourceEnum;
  zmoFzType: number;
  zmoFinanceSourceBudget: boolean;
  zmoFinanceSourceOutOfBudget: boolean;
  zmoFinanceSourceMixedBudget: boolean;
  zmoFinanceSourceMunicipalBudget: boolean;
  zmoFinanceSourceRegionalBudget: boolean;
  zmoFinanceSourceFederalBudget: boolean;
  zmoFinanceSourceNotChecked: boolean;
  parentNotTookPlaceTradeId: number;
  tradeIds: number[];
}

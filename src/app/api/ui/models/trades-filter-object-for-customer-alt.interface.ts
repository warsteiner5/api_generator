import { TradeSearchTypeEnum } from '../enums/trade-search-type.enum';
import { TradesFilterObjectAlt } from './trades-filter-object-alt.interface';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

// @ts-ignore
export interface TradesFilterObjectForCustomerAlt extends TradesFilterObjectAlt {
  zmoFinanceSource: ZmoFinanceSourceEnum;
  zmoFzType: number;
  showOnlyOwnTrades: boolean;
  isExpire: boolean;
  zmoFinanceSourceBudget: boolean;
  zmoFinanceSourceOutOfBudget: boolean;
  zmoFinanceSourceMixedBudget: boolean;
  zmoFinanceSourceMunicipalBudget: boolean;
  zmoFinanceSourceRegionalBudget: boolean;
  zmoFinanceSourceFederalBudget: boolean;
  zmoFinanceSourceNotChecked: boolean;
  showTradesCount: boolean;
  tradeSearchType: TradeSearchTypeEnum;
}

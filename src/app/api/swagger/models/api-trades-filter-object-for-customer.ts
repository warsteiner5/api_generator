/* tslint:disable */
/* eslint-disable */
import { ApiTradeSearchTypeEnum } from '../models/api-trade-search-type-enum';
import { ApiTradesFilterObjectAltDto } from '../models/api-trades-filter-object';
import { ApiZmoFinanceSourceEnum } from '../models/api-zmo-finance-source-enum';
export type ApiTradesFilterObjectForCustomerAltDto = ApiTradesFilterObjectAltDto & {
'ZmoFinanceSource'?: ApiZmoFinanceSourceEnum | null;
'ZmoFzType'?: number | null;
'ShowOnlyOwnTrades'?: boolean;
'IsExpire'?: boolean;
'ZmoFinanceSourceBudget'?: boolean;
'ZmoFinanceSourceOutOfBudget'?: boolean;
'ZmoFinanceSourceMixedBudget'?: boolean;
'ZmoFinanceSourceMunicipalBudget'?: boolean;
'ZmoFinanceSourceRegionalBudget'?: boolean;
'ZmoFinanceSourceFederalBudget'?: boolean;
'ZmoFinanceSourceNotChecked'?: boolean | null;
'ShowTradesCount'?: boolean;
'TradeSearchType'?: ApiTradeSearchTypeEnum | null;
};

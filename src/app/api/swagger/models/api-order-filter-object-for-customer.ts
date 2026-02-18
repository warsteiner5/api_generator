/* tslint:disable */
/* eslint-disable */
import { ApiOrderFilterObjectAltDto } from '../models/api-order-filter-object';
import { ApiTradeSearchTypeEnum } from '../models/api-trade-search-type-enum';
import { ApiZmoFinanceSourceEnum } from '../models/api-zmo-finance-source-enum';
export type ApiOrderFilterObjectForCustomerAltDto = ApiOrderFilterObjectAltDto & {
'ParticipantNameOrInn'?: string | null;
'CustomerNameOrInn'?: string | null;
'ShowOnlyOwnOrder'?: boolean;
'OrderSearchType'?: ApiTradeSearchTypeEnum | null;
'ShowTradesCount'?: boolean;
'ZmoFinanceSource'?: ApiZmoFinanceSourceEnum | null;
'ZmoFzType'?: number | null;
'ZmoFinanceSourceBudget'?: boolean;
'ZmoFinanceSourceOutOfBudget'?: boolean;
'ZmoFinanceSourceMixedBudget'?: boolean;
'ZmoFinanceSourceMunicipalBudget'?: boolean;
'ZmoFinanceSourceRegionalBudget'?: boolean;
'ZmoFinanceSourceFederalBudget'?: boolean;
'ZmoFinanceSourceNotChecked'?: boolean | null;
'ParentNotTookPlaceTradeId'?: number | null;
'TradeIds'?: Array<number> | null;
};

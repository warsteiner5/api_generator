/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
export type ApiTradesFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'IsImmediate'?: boolean;
'TradeName'?: string | null;
'TradeNumber'?: string | null;
'TradeSections'?: Array<string> | null;
'TradeState'?: ApiLotStateEnum | null;
'IsLapsed'?: boolean;
'FilterPriceMin'?: number | null;
'FilterPriceMax'?: number | null;
'FilterDateFrom'?: string | null;
'FilterDateTo'?: string | null;
'FilterFillingApplicationEndDateFrom'?: string | null;
'FilterFillingApplicationEndDateTo'?: string | null;
'CustomerFullNameOrInn'?: string | null;
'UseCustomerInn'?: boolean;
'UseCustomerName'?: boolean;
};

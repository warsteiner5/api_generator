/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiLotStateEnum } from '../models/api-lot-state-enum';
export type ApiTradesFilterObjectForAnonymousAltDto = ApiBaseFilterObjectAltDto & {
'TradeNumber'?: string | null;
'TradeName'?: string | null;
'ClassificatorCodes'?: Array<string> | null;
'IsImmediate'?: boolean;
'CustomerAddress'?: string | null;
'FilterPriceMin'?: number | null;
'FilterPriceMax'?: number | null;
'FilterDateFrom'?: string | null;
'FilterDateTo'?: string | null;
'FilterFillingApplicationEndDateFrom'?: string | null;
'FilterFillingApplicationEndDateTo'?: string | null;
'CustomerFullNameOrInn'?: string | null;
'UseCustomerInn'?: boolean;
'UseCustomerName'?: boolean;
'TradeState'?: ApiLotStateEnum | null;
};

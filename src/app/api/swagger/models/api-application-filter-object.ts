/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiFilterApplicationStateAltEnum } from '../models/api-filter-application-state';
import { ApiSortingParamAltDto } from '../models/api-sorting-param';
export type ApiApplicationFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'IncomingNumber'?: number | null;
'TradeNumber'?: number | null;
'TradeName'?: string | null;
'PublishDateFrom'?: string | null;
'PublishDateTo'?: string | null;
'RevokeDateFrom'?: string | null;
'RevokeDateTo'?: string | null;
'State'?: ApiFilterApplicationStateAltEnum | null;
'SortingParams'?: Array<ApiSortingParamAltDto> | null;
};

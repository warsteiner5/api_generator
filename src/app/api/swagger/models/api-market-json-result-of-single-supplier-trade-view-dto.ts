/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSingleSupplierTradeViewDto } from '../models/api-single-supplier-trade-view-dto';
export type ApiMarketJsonResultOfSingleSupplierTradeViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSingleSupplierTradeViewDto | null;
};

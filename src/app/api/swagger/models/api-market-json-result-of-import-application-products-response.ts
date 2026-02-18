/* tslint:disable */
/* eslint-disable */
import { ApiImportApplicationProductsResponseAltDto } from '../models/api-import-application-products-response';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportApplicationProductsResponse = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportApplicationProductsResponseAltDto | null;
};

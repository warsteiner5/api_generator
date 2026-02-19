/* tslint:disable */
/* eslint-disable */
import { ApiImportApplicationProductsResponseAltDto } from '../models/api-import-application-products-response';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportApplicationProductsResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportApplicationProductsResponseAltDto | null;
};

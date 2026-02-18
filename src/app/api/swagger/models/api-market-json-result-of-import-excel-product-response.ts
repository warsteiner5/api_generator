/* tslint:disable */
/* eslint-disable */
import { ApiImportExcelProductResponseAltDto } from '../models/api-import-excel-product-response';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportExcelProductResponse = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportExcelProductResponseAltDto | null;
};

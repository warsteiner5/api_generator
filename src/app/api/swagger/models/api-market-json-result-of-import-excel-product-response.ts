/* tslint:disable */
/* eslint-disable */
import { ApiImportExcelProductResponseAltDto } from '../models/api-import-excel-product-response';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportExcelProductResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportExcelProductResponseAltDto | null;
};

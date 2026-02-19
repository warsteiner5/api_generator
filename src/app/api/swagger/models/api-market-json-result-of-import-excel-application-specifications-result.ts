/* tslint:disable */
/* eslint-disable */
import { ApiImportExcelApplicationSpecificationsResultAltDto } from '../models/api-import-excel-application-specifications-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfImportExcelApplicationSpecificationsResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiImportExcelApplicationSpecificationsResultAltDto | null;
};

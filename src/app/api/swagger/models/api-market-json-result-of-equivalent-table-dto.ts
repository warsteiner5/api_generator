/* tslint:disable */
/* eslint-disable */
import { ApiEquivalentTableDto } from '../models/api-equivalent-table-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfEquivalentTableDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiEquivalentTableDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiFinanceSourceDto } from '../models/api-finance-source-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiFinanceSourceDto> | null;
};

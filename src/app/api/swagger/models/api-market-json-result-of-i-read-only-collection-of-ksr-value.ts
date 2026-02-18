/* tslint:disable */
/* eslint-disable */
import { ApiKsrValueAltDto } from '../models/api-ksr-value';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiKsrValueAltDto> | null;
};

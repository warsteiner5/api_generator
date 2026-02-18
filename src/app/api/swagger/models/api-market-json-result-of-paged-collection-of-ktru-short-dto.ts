/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPagedCollectionOfKtruShortDto } from '../models/api-paged-collection-of-ktru-short-dto';
export type ApiMarketJsonResultOfPagedCollectionOfKtruShortDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPagedCollectionOfKtruShortDto | null;
};

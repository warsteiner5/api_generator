/* tslint:disable */
/* eslint-disable */
import { ApiKsrCategoryAltDto } from '../models/api-ksr-category';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategory = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiKsrCategoryAltDto> | null;
};

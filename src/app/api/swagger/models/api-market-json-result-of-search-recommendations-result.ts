/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSearchRecommendationsResultAltDto } from '../models/api-search-recommendations-result';
export type ApiMarketJsonResultOfSearchRecommendationsResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSearchRecommendationsResultAltDto | null;
};

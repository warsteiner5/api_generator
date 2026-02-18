/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiStarLightSearchResultDto } from '../models/api-star-light-search-result-dto';
export type ApiMarketJsonResultOfStarLightSearchResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiStarLightSearchResultDto | null;
};

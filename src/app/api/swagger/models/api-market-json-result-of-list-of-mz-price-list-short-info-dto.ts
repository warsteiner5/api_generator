/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMzPriceListShortInfoDto } from '../models/api-mz-price-list-short-info-dto';
export type ApiMarketJsonResultOfListOfMzPriceListShortInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMzPriceListShortInfoDto> | null;
};

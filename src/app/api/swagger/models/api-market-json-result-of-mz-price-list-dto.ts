/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMzPriceListDto } from '../models/api-mz-price-list-dto';
export type ApiMarketJsonResultOfMzPriceListDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMzPriceListDto | null;
};

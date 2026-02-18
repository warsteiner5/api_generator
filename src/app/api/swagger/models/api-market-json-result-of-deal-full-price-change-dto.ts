/* tslint:disable */
/* eslint-disable */
import { ApiDealFullPriceChangeDto } from '../models/api-deal-full-price-change-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDealFullPriceChangeDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDealFullPriceChangeDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiLotPriceAltDto } from '../models/api-lot-price';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfLotPrice = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiLotPriceAltDto | null;
};

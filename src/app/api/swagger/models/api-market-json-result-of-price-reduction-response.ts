/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPriceReductionResponseAltDto } from '../models/api-price-reduction-response';
export type ApiMarketJsonResultOfPriceReductionResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPriceReductionResponseAltDto | null;
};

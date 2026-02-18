/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOfferStatusResultDto } from '../models/api-market-offer-status-result-dto';
export type ApiMarketJsonResultOfListOfMarketOfferStatusResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketOfferStatusResultDto> | null;
};

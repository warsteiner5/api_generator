/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOfferDatesResultDto } from '../models/api-market-offer-dates-result-dto';
export type ApiMarketJsonResultOfListOfMarketOfferDatesResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketOfferDatesResultDto> | null;
};

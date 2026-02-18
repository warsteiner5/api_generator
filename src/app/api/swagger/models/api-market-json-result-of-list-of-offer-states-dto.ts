/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOfferStatesDto } from '../models/api-offer-states-dto';
export type ApiMarketJsonResultOfListOfOfferStatesDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOfferStatesDto> | null;
};

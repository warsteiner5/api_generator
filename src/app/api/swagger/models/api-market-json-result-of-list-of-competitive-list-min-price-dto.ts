/* tslint:disable */
/* eslint-disable */
import { ApiCompetitiveListMinPriceDto } from '../models/api-competitive-list-min-price-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCompetitiveListMinPriceDto> | null;
};

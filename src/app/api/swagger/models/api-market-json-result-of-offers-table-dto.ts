/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOffersTableDto } from '../models/api-offers-table-dto';
export type ApiMarketJsonResultOfOffersTableDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOffersTableDto | null;
};

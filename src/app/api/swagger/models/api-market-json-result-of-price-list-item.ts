/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPriceListItemAltDto } from '../models/api-price-list-item';
export type ApiMarketJsonResultOfPriceListItem = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPriceListItemAltDto | null;
};

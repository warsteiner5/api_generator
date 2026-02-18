/* tslint:disable */
/* eslint-disable */
import { ApiAcceptedPriceListsExtendedResultAltDto } from '../models/api-accepted-price-lists-extended-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfAcceptedPriceListsExtendedResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiAcceptedPriceListsExtendedResultAltDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSignBidResponseAltDto } from '../models/api-sign-bid-response';
export type ApiMarketJsonResultOfSignBidResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSignBidResponseAltDto | null;
};

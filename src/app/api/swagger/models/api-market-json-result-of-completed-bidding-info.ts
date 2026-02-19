/* tslint:disable */
/* eslint-disable */
import { ApiCompletedBiddingInfoAltDto } from '../models/api-completed-bidding-info';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCompletedBiddingInfoAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCompletedBiddingInfoAltDto | null;
};

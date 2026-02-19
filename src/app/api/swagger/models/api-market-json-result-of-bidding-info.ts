/* tslint:disable */
/* eslint-disable */
import { ApiBiddingInfoAltDto } from '../models/api-bidding-info';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfBiddingInfoAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiBiddingInfoAltDto | null;
};

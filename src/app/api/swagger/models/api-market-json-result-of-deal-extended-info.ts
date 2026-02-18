/* tslint:disable */
/* eslint-disable */
import { ApiDealExtendedInfoAltDto } from '../models/api-deal-extended-info';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDealExtendedInfo = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiDealExtendedInfoAltDto | null;
};

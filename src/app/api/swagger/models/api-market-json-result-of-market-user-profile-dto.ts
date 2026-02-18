/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketUserProfileDto } from '../models/api-market-user-profile-dto';
export type ApiMarketJsonResultOfMarketUserProfileDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketUserProfileDto | null;
};

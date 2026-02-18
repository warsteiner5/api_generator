/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRoleDetailResponseAltDto } from '../models/api-role-detail-response';
export type ApiMarketJsonResultOfRoleDetailResponse = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiRoleDetailResponseAltDto | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrganizationInfoDto } from '../models/api-organization-info-dto';
export type ApiMarketJsonResultOfOrganizationInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOrganizationInfoDto | null;
};

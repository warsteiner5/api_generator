/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOrganizationFullInfoDto } from '../models/api-market-organization-full-info-dto';
export type ApiMarketJsonResultOfMarketOrganizationFullInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketOrganizationFullInfoDto | null;
};

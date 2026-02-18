/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOrganizationFullInfoDto } from '../models/api-market-organization-full-info-dto';
export type ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketOrganizationFullInfoDto> | null;
};

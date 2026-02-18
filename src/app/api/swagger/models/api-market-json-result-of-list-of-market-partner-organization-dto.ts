/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketPartnerOrganizationDto } from '../models/api-market-partner-organization-dto';
export type ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiMarketPartnerOrganizationDto> | null;
};

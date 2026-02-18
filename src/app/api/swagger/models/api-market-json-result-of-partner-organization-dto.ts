/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPartnerOrganizationDto } from '../models/api-partner-organization-dto';
export type ApiMarketJsonResultOfPartnerOrganizationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPartnerOrganizationDto | null;
};

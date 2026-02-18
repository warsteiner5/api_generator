/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMarketOrganizationSettingsAltDto } from '../models/api-market-organization-settings';
export type ApiMarketJsonResultOfMarketOrganizationSettings = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMarketOrganizationSettingsAltDto | null;
};

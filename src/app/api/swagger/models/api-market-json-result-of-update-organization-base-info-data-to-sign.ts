/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiUpdateOrganizationBaseInfoDataToSignAltDto } from '../models/api-update-organization-base-info-data-to-sign';
export type ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiUpdateOrganizationBaseInfoDataToSignAltDto | null;
};

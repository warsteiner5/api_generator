/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTenantSettingDto } from '../models/api-tenant-setting-dto';
export type ApiMarketJsonResultOfTenantSettingDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTenantSettingDto | null;
};

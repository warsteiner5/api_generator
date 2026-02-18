/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrgSettingDto } from '../models/api-org-setting-dto';
export type ApiMarketJsonResultOfIListOfOrgSettingDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOrgSettingDto> | null;
};

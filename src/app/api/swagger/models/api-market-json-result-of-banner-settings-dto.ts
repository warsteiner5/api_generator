/* tslint:disable */
/* eslint-disable */
import { ApiBannerSettingsDto } from '../models/api-banner-settings-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfBannerSettingsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiBannerSettingsDto | null;
};

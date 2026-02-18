/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSettingsStatsResultAltDto } from '../models/api-settings-stats-result';
export type ApiMarketJsonResultOfSettingsStatsResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSettingsStatsResultAltDto | null;
};

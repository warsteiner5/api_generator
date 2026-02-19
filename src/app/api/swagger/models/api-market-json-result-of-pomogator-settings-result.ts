/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPomogatorSettingsResultAltDto } from '../models/api-pomogator-settings-result';
export type ApiMarketJsonResultOfPomogatorSettingsResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPomogatorSettingsResultAltDto | null;
};

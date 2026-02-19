/* tslint:disable */
/* eslint-disable */
import { ApiLoginPreferenceModelAltDto } from '../models/api-login-preference-model';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfLoginPreferenceModelAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiLoginPreferenceModelAltDto | null;
};

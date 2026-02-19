/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSettingsAddedResponseAltDto } from '../models/api-settings-added-response';
export type ApiMarketJsonResultOfSettingsAddedResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSettingsAddedResponseAltDto | null;
};

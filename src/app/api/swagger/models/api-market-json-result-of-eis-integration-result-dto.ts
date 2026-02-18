/* tslint:disable */
/* eslint-disable */
import { ApiEisIntegrationResultDto } from '../models/api-eis-integration-result-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfEisIntegrationResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiEisIntegrationResultDto | null;
};

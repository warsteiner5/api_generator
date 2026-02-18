/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPowerOfAttorneyInfoDto } from '../models/api-power-of-attorney-info-dto';
export type ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiPowerOfAttorneyInfoDto> | null;
};

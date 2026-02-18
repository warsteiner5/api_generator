/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPartnerRequestDto } from '../models/api-partner-request-dto';
export type ApiMarketJsonResultOfListOfPartnerRequestDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiPartnerRequestDto> | null;
};

/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalAgreementDto } from '../models/api-additional-agreement-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIListOfAdditionalAgreementDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiAdditionalAgreementDto> | null;
};

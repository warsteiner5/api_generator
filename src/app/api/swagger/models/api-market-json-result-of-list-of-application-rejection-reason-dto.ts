/* tslint:disable */
/* eslint-disable */
import { ApiApplicationRejectionReasonDto } from '../models/api-application-rejection-reason-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfApplicationRejectionReasonDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiApplicationRejectionReasonDto> | null;
};

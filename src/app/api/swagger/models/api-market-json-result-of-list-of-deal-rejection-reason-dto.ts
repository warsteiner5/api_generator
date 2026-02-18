/* tslint:disable */
/* eslint-disable */
import { ApiDealRejectionReasonDto } from '../models/api-deal-rejection-reason-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfDealRejectionReasonDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiDealRejectionReasonDto> | null;
};

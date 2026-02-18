/* tslint:disable */
/* eslint-disable */
import { ApiClarificationRequestsDto } from '../models/api-clarification-requests-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfClarificationRequestsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiClarificationRequestsDto | null;
};

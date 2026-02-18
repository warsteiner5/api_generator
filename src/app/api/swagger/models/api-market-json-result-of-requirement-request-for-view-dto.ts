/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRequirementRequestForViewDto } from '../models/api-requirement-request-for-view-dto';
export type ApiMarketJsonResultOfRequirementRequestForViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiRequirementRequestForViewDto | null;
};

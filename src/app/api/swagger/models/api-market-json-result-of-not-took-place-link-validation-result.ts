/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiNotTookPlaceLinkValidationResultAltDto } from '../models/api-not-took-place-link-validation-result';
export type ApiMarketJsonResultOfNotTookPlaceLinkValidationResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiNotTookPlaceLinkValidationResultAltDto | null;
};

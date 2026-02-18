/* tslint:disable */
/* eslint-disable */
import { ApiCanCreateChildTradeValidationResultAltDto } from '../models/api-can-create-child-trade-validation-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCanCreateChildTradeValidationResult = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCanCreateChildTradeValidationResultAltDto | null;
};

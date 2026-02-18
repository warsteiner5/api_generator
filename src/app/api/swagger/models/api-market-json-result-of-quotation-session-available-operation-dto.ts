/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionAvailableOperationDto } from '../models/api-quotation-session-available-operation-dto';
export type ApiMarketJsonResultOfQuotationSessionAvailableOperationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionAvailableOperationDto | null;
};

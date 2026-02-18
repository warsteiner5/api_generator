/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionApplicationShortDto } from '../models/api-quotation-session-application-short-dto';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiQuotationSessionApplicationShortDto> | null;
};

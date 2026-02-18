/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionApplicationDetailsDto } from '../models/api-quotation-session-application-details-dto';
export type ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionApplicationDetailsDto | null;
};

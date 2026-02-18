/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionAltDto } from '../models/api-quotation-session';
export type ApiMarketJsonResultOfQuotationSession = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionAltDto | null;
};

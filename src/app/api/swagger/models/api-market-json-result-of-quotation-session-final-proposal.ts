/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionFinalProposalAltDto } from '../models/api-quotation-session-final-proposal';
export type ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionFinalProposalAltDto | null;
};

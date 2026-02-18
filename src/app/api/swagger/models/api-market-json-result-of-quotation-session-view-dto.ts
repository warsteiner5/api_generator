/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionViewDto } from '../models/api-quotation-session-view-dto';
export type ApiMarketJsonResultOfQuotationSessionViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionViewDto | null;
};

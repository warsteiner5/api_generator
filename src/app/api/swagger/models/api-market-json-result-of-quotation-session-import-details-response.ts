/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiQuotationSessionImportDetailsResponseAltDto } from '../models/api-quotation-session-import-details-response';
export type ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiQuotationSessionImportDetailsResponseAltDto | null;
};

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionImportDetailsResponseAlt } from './quotation-session-import-details-response-alt.interface';

export type MarketJsonResultOfQuotationSessionImportDetailsResponse = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionImportDetailsResponseAlt | null; };

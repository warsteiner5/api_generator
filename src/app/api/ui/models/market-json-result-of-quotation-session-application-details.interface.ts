import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionApplicationDetails } from './quotation-session-application-details.interface';

export type MarketJsonResultOfQuotationSessionApplicationDetails = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionApplicationDetails | null; };

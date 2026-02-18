import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionAlt } from './quotation-session-alt.interface';

export type MarketJsonResultOfQuotationSession = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionAlt | null; };

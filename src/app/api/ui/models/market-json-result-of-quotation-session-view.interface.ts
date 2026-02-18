import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionView } from './quotation-session-view.interface';

export type MarketJsonResultOfQuotationSessionView = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionView | null; };

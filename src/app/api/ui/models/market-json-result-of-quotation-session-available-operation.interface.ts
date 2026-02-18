import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionAvailableOperation } from './quotation-session-available-operation.interface';

export type MarketJsonResultOfQuotationSessionAvailableOperation = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionAvailableOperation | null; };

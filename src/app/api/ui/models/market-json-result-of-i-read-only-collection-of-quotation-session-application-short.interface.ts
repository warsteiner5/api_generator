import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionApplicationShort } from './quotation-session-application-short.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort = MarketJsonVoidResultAlt & { 'data'?: Array<QuotationSessionApplicationShort> | null; };

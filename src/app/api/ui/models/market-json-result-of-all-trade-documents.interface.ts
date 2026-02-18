import { AllTradeDocuments } from './all-trade-documents.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfAllTradeDocuments = MarketJsonVoidResultAlt & { 'data'?: AllTradeDocuments | null; };

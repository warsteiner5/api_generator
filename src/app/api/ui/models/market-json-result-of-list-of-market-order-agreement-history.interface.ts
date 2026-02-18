import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrderAgreementHistory } from './market-order-agreement-history.interface';

export type MarketJsonResultOfListOfMarketOrderAgreementHistory = MarketJsonVoidResultAlt & { 'data'?: Array<MarketOrderAgreementHistory> | null; };

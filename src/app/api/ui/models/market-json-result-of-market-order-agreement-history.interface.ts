import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrderAgreementHistory } from './market-order-agreement-history.interface';

export type MarketJsonResultOfMarketOrderAgreementHistory = MarketJsonVoidResultAlt & { 'data'?: MarketOrderAgreementHistory | null; };

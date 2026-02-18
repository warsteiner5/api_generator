import { DealAgreementHistory } from './deal-agreement-history.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDealAgreementHistory = MarketJsonVoidResultAlt & { 'data'?: DealAgreementHistory | null; };

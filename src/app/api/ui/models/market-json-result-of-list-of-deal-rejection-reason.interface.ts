import { DealRejectionReason } from './deal-rejection-reason.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfDealRejectionReason = MarketJsonVoidResultAlt & { 'data'?: Array<DealRejectionReason> | null; };

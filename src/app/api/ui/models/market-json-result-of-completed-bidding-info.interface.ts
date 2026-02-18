import { CompletedBiddingInfoAlt } from './completed-bidding-info-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCompletedBiddingInfo = MarketJsonVoidResultAlt & { 'data'?: CompletedBiddingInfoAlt | null; };

import { BiddingInfoAlt } from './bidding-info-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBiddingInfo = MarketJsonVoidResultAlt & { 'data'?: BiddingInfoAlt | null; };

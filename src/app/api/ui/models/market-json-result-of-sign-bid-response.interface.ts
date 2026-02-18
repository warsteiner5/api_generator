import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SignBidResponseAlt } from './sign-bid-response-alt.interface';

export type MarketJsonResultOfSignBidResponse = MarketJsonVoidResultAlt & { 'data'?: SignBidResponseAlt | null; };

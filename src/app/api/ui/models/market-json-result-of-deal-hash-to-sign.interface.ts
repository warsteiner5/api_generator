import { DealHashToSign } from './deal-hash-to-sign.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDealHashToSign = MarketJsonVoidResultAlt & { 'data'?: DealHashToSign | null; };

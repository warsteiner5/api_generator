import { DealCountdown } from './deal-countdown.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDealCountdown = MarketJsonVoidResultAlt & { 'data'?: DealCountdown | null; };

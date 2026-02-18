import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MessengerStatusAlt } from './messenger-status-alt.interface';

export type MarketJsonResultOfMessengerStatus = MarketJsonVoidResultAlt & { 'data'?: MessengerStatusAlt | null; };

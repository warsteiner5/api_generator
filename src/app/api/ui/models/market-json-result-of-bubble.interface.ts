import { Bubble } from './bubble.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBubble = MarketJsonVoidResultAlt & { 'data'?: Bubble | null; };

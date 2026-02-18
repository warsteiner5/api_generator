import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MemoryStreamAlt } from './memory-stream-alt.interface';

export type MarketJsonResultOfMemoryStream = MarketJsonVoidResultAlt & { 'data'?: MemoryStreamAlt | null; };

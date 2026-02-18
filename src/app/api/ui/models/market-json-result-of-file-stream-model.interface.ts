import { FileStreamModelAlt } from './file-stream-model-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfFileStreamModel = MarketJsonVoidResultAlt & { 'data'?: FileStreamModelAlt | null; };

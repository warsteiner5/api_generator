import { BatchProcessingResultAlt } from './batch-processing-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBatchProcessingResult = MarketJsonVoidResultAlt & { 'data'?: BatchProcessingResultAlt | null; };

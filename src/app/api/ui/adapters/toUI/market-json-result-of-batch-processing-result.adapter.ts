import { ApiMarketJsonResultOfBatchProcessingResult } from '../../../swagger/models/api-market-json-result-of-batch-processing-result';
import { MarketJsonResultOfBatchProcessingResult } from '../../models/market-json-result-of-batch-processing-result.interface';

export function adaptMarketJsonResultOfBatchProcessingResultToUI(source?: ApiMarketJsonResultOfBatchProcessingResult | null): MarketJsonResultOfBatchProcessingResult {
  return (source ?? {}) as MarketJsonResultOfBatchProcessingResult;
}

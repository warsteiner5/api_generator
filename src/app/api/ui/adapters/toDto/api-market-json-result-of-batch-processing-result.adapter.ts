import { MarketJsonResultOfBatchProcessingResult } from '../../models/market-json-result-of-batch-processing-result.interface';
import { ApiMarketJsonResultOfBatchProcessingResult } from '../../../swagger/models/api-market-json-result-of-batch-processing-result';

export function adaptApiMarketJsonResultOfBatchProcessingResult(source?: MarketJsonResultOfBatchProcessingResult | null): ApiMarketJsonResultOfBatchProcessingResult {
  return (source ?? {}) as ApiMarketJsonResultOfBatchProcessingResult;
}

import { ApiMarketJsonResultOfValidationResult } from '../../../swagger/models/api-market-json-result-of-validation-result';
import { MarketJsonResultOfValidationResult } from '../../models/market-json-result-of-validation-result.interface';

export function adaptMarketJsonResultOfValidationResultToUI(source?: ApiMarketJsonResultOfValidationResult | null): MarketJsonResultOfValidationResult {
  return (source ?? {}) as MarketJsonResultOfValidationResult;
}

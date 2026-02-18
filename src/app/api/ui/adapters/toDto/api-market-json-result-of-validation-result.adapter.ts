import { MarketJsonResultOfValidationResult } from '../../models/market-json-result-of-validation-result.interface';
import { ApiMarketJsonResultOfValidationResult } from '../../../swagger/models/api-market-json-result-of-validation-result';

export function adaptApiMarketJsonResultOfValidationResult(source?: MarketJsonResultOfValidationResult | null): ApiMarketJsonResultOfValidationResult {
  return (source ?? {}) as ApiMarketJsonResultOfValidationResult;
}

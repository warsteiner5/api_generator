import { MarketJsonResultOfCanCreateChildTradeValidationResult } from '../../models/market-json-result-of-can-create-child-trade-validation-result.interface';
import { ApiMarketJsonResultOfCanCreateChildTradeValidationResult } from '../../../swagger/models/api-market-json-result-of-can-create-child-trade-validation-result';

export function adaptApiMarketJsonResultOfCanCreateChildTradeValidationResult(source?: MarketJsonResultOfCanCreateChildTradeValidationResult | null): ApiMarketJsonResultOfCanCreateChildTradeValidationResult {
  return (source ?? {}) as ApiMarketJsonResultOfCanCreateChildTradeValidationResult;
}

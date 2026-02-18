import { ApiMarketJsonResultOfCanCreateChildTradeValidationResult } from '../../../swagger/models/api-market-json-result-of-can-create-child-trade-validation-result';
import { MarketJsonResultOfCanCreateChildTradeValidationResult } from '../../models/market-json-result-of-can-create-child-trade-validation-result.interface';

export function adaptMarketJsonResultOfCanCreateChildTradeValidationResultToUI(source?: ApiMarketJsonResultOfCanCreateChildTradeValidationResult | null): MarketJsonResultOfCanCreateChildTradeValidationResult {
  return (source ?? {}) as MarketJsonResultOfCanCreateChildTradeValidationResult;
}

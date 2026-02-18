import { MarketJsonResultOfNotTookPlaceLinkValidationResult } from '../../models/market-json-result-of-not-took-place-link-validation-result.interface';
import { ApiMarketJsonResultOfNotTookPlaceLinkValidationResult } from '../../../swagger/models/api-market-json-result-of-not-took-place-link-validation-result';

export function adaptApiMarketJsonResultOfNotTookPlaceLinkValidationResult(source?: MarketJsonResultOfNotTookPlaceLinkValidationResult | null): ApiMarketJsonResultOfNotTookPlaceLinkValidationResult {
  return (source ?? {}) as ApiMarketJsonResultOfNotTookPlaceLinkValidationResult;
}

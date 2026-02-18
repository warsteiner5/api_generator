import { ApiMarketJsonResultOfNotTookPlaceLinkValidationResult } from '../../../swagger/models/api-market-json-result-of-not-took-place-link-validation-result';
import { MarketJsonResultOfNotTookPlaceLinkValidationResult } from '../../models/market-json-result-of-not-took-place-link-validation-result.interface';

export function adaptMarketJsonResultOfNotTookPlaceLinkValidationResultToUI(source?: ApiMarketJsonResultOfNotTookPlaceLinkValidationResult | null): MarketJsonResultOfNotTookPlaceLinkValidationResult {
  return (source ?? {}) as MarketJsonResultOfNotTookPlaceLinkValidationResult;
}

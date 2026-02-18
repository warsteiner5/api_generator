import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../../swagger/models/api-market-json-result-of-eis-integration-result-dto';
import { MarketJsonResultOfEisIntegrationResult } from '../../models/market-json-result-of-eis-integration-result.interface';

export function adaptMarketJsonResultOfEisIntegrationResultToUI(source?: ApiMarketJsonResultOfEisIntegrationResultDto | null): MarketJsonResultOfEisIntegrationResult {
  return (source ?? {}) as MarketJsonResultOfEisIntegrationResult;
}

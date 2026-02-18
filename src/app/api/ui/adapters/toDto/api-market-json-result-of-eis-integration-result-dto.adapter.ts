import { MarketJsonResultOfEisIntegrationResult } from '../../models/market-json-result-of-eis-integration-result.interface';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../../swagger/models/api-market-json-result-of-eis-integration-result-dto';

export function adaptApiMarketJsonResultOfEisIntegrationResultDto(source?: MarketJsonResultOfEisIntegrationResult | null): ApiMarketJsonResultOfEisIntegrationResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfEisIntegrationResultDto;
}

import { ApiEisIntegrationResultDto } from '../../../swagger/models/api-eis-integration-result-dto';
import { EisIntegrationResult } from '../../models/eis-integration-result.interface';

export function adaptEisIntegrationResultToUI(source?: ApiEisIntegrationResultDto | null): EisIntegrationResult {
  return {
    errors: source?.Errors ?? [],
    success: source?.Success ?? false,
    url: source?.Url ?? '',
  };
}

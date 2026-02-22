import { ApiEisIntegrationResultDto } from '../../../swagger/models/api-eis-integration-result-dto';
import { EisIntegrationResult } from '../../models/eis-integration-result.interface';

export const eisIntegrationResultAdapter = (source?: ApiEisIntegrationResultDto | null): EisIntegrationResult => {
  return {
    errors: source?.Errors,
    success: source?.Success,
    url: source?.Url,
  };
}

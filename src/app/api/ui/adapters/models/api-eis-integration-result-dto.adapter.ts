import { EisIntegrationResult } from '../../models/eis-integration-result.interface';
import { ApiEisIntegrationResultDto } from '../../../swagger/models/api-eis-integration-result-dto';

export const apiEisIntegrationResultDtoAdapter = (source?: EisIntegrationResult | null): ApiEisIntegrationResultDto => {
  return {
    Errors: source?.errors,
    Success: source?.success,
    Url: source?.url,
  };
}

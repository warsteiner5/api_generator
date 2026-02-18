import { ApiV2ApiResponseAltDto } from '../../../swagger/models/api-v-2-api-response';
import { V2ApiResponseAlt } from '../../models/v-2-api-response-alt.interface';

export function adaptV2ApiResponseAltToUI(source?: ApiV2ApiResponseAltDto | null): V2ApiResponseAlt {
  return {
    errors: source?.Errors ?? [],
    success: source?.Success ?? false,
  };
}

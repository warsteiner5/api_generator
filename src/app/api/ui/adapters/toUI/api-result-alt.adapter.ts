import { ApiApiResultAltDto } from '../../../swagger/models/api-api-result';
import { ApiResultAlt } from '../../models/api-result-alt.interface';

export function adaptApiResultAltToUI(source?: ApiApiResultAltDto | null): ApiResultAlt {
  return {
    description: source?.Description ?? '',
    message: source?.Message ?? '',
    success: source?.Success ?? false,
    traceId: source?.TraceId ?? '',
  };
}

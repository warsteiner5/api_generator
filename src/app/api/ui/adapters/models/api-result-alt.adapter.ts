import { ApiApiResultAltDto } from '../../../swagger/models/api-api-result';
import { ApiResultAlt } from '../../models/api-result-alt.interface';

export const apiResultAltAdapter = (source?: ApiApiResultAltDto | null): ApiResultAlt => {
  return {
    description: source?.Description,
    message: source?.Message,
    success: source?.Success,
    traceId: source?.TraceId,
  };
}

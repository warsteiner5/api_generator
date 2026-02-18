import { ApiResultAlt } from '../../models/api-result-alt.interface';
import { ApiApiResultAltDto } from '../../../swagger/models/api-api-result';

export function adaptApiApiResultAltDto(source?: ApiResultAlt | null): ApiApiResultAltDto {
  return {
    Description: source?.description,
    Message: source?.message,
    Success: source?.success,
    TraceId: source?.traceId,
  };
}

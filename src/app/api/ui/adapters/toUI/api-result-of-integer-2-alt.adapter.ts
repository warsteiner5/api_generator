import { ApiApiResultOfInteger2AltDto } from '../../../swagger/models/api-api-result-of-integer-2';
import { ApiResultOfInteger2Alt } from '../../models/api-result-of-integer-2-alt.interface';

export function adaptApiResultOfInteger2AltToUI(source?: ApiApiResultOfInteger2AltDto | null): ApiResultOfInteger2Alt {
  return (source ?? {}) as ApiResultOfInteger2Alt;
}

import { ApiResultOfInteger2Alt } from '../../models/api-result-of-integer-2-alt.interface';
import { ApiApiResultOfInteger2AltDto } from '../../../swagger/models/api-api-result-of-integer-2';

export const apiApiResultOfInteger2AltDtoAdapter = (source?: ApiResultOfInteger2Alt | null): ApiApiResultOfInteger2AltDto => {
  return (source ?? {}) as ApiApiResultOfInteger2AltDto;
}

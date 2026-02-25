import { ApiApiResultOfInteger2AltDto } from '../../../swagger/models/api-api-result-of-integer-2';
import { ApiResultOfInteger2Alt } from '../../models/api-result-of-integer-2-alt.interface';
import { apiResultAltAdapter } from './api-result-alt.adapter';

export const apiResultOfInteger2AltAdapter = (source?: ApiApiResultOfInteger2AltDto | null): ApiResultOfInteger2Alt => {
  return {
    ...apiResultAltAdapter(source as unknown as Parameters<typeof apiResultAltAdapter>[0]),
    result: source?.Result,
  };
}

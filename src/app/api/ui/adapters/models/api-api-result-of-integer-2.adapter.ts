import { ApiResultOfInteger2Alt } from '../../models/api-result-of-integer-2-alt.interface';
import { ApiApiResultOfInteger2AltDto } from '../../../swagger/models/api-api-result-of-integer-2';
import { apiApiResultAltDtoAdapter } from './api-api-result.adapter';

export const apiApiResultOfInteger2AltDtoAdapter = (source?: ApiResultOfInteger2Alt | null): ApiApiResultOfInteger2AltDto => {
  return {
    ...apiApiResultAltDtoAdapter(source as unknown as Parameters<typeof apiApiResultAltDtoAdapter>[0]),
    Result: source?.result,
  };
}

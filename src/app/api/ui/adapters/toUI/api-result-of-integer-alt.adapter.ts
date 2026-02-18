import { ApiApiResultOfIntegerAltDto } from '../../../swagger/models/api-api-result-of-integer';
import { ApiResultOfIntegerAlt } from '../../models/api-result-of-integer-alt.interface';

export function adaptApiResultOfIntegerAltToUI(source?: ApiApiResultOfIntegerAltDto | null): ApiResultOfIntegerAlt {
  return {
    data: source?.Data ?? 0,
    success: source?.Success ?? false,
  };
}

import { ApiApiResultOfIntegerAltDto } from '../../../swagger/models/api-api-result-of-integer';
import { ApiResultOfIntegerAlt } from '../../models/api-result-of-integer-alt.interface';

export const apiResultOfIntegerAltAdapter = (source?: ApiApiResultOfIntegerAltDto | null): ApiResultOfIntegerAlt => {
  return {
    data: source?.Data,
    success: source?.Success,
  };
}

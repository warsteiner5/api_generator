import { ApiResultOfIntegerAlt } from '../../models/api-result-of-integer-alt.interface';
import { ApiApiResultOfIntegerAltDto } from '../../../swagger/models/api-api-result-of-integer';

export const apiApiResultOfIntegerAltDtoAdapter = (source?: ApiResultOfIntegerAlt | null): ApiApiResultOfIntegerAltDto => {
  return {
    Data: source?.data,
    Success: source?.success,
  };
}

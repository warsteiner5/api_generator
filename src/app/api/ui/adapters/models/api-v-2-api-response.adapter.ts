import { V2ApiResponseAlt } from '../../models/v-2-api-response-alt.interface';
import { ApiV2ApiResponseAltDto } from '../../../swagger/models/api-v-2-api-response';

export const apiV2ApiResponseAltDtoAdapter = (source?: V2ApiResponseAlt | null): ApiV2ApiResponseAltDto => {
  return {
    Errors: source?.errors,
    Success: source?.success,
  };
}

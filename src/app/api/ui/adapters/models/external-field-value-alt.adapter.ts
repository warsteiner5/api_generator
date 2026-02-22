import { ApiExternalFieldValueAltDto } from '../../../swagger/models/api-external-field-value';
import { ExternalFieldValueAlt } from '../../models/external-field-value-alt.interface';

export const externalFieldValueAltAdapter = (source?: ApiExternalFieldValueAltDto | null): ExternalFieldValueAlt => {
  return {
    apiCode: source?.ApiCode,
    id: source?.Id,
    value: source?.Value,
  };
}

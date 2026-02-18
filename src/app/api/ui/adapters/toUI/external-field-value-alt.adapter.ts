import { ApiExternalFieldValueAltDto } from '../../../swagger/models/api-external-field-value';
import { ExternalFieldValueAlt } from '../../models/external-field-value-alt.interface';

export function adaptExternalFieldValueAltToUI(source?: ApiExternalFieldValueAltDto | null): ExternalFieldValueAlt {
  return {
    apiCode: source?.ApiCode ?? '',
    id: source?.Id ?? 0,
    value: source?.Value ?? '',
  };
}

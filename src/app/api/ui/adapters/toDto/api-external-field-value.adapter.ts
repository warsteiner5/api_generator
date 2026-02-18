import { ExternalFieldValueAlt } from '../../models/external-field-value-alt.interface';
import { ApiExternalFieldValueAltDto } from '../../../swagger/models/api-external-field-value';

export function adaptApiExternalFieldValueAltDto(source?: ExternalFieldValueAlt | null): ApiExternalFieldValueAltDto {
  return {
    ApiCode: source?.apiCode,
    Id: source?.id,
    Value: source?.value,
  };
}

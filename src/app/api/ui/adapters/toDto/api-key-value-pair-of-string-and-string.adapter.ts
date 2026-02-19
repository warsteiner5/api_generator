import { KeyValuePairOfStringAndStringAlt } from '../../models/key-value-pair-of-string-and-string-alt.interface';
import { ApiKeyValuePairOfStringAndStringAltDto } from '../../../swagger/models/api-key-value-pair-of-string-and-string';

export function adaptApiKeyValuePairOfStringAndStringAltDto(source?: KeyValuePairOfStringAndStringAlt | null): ApiKeyValuePairOfStringAndStringAltDto {
  return {
    Key: source?.key,
    Value: source?.value,
  };
}

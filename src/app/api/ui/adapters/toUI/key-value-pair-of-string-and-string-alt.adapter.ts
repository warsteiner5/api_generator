import { ApiKeyValuePairOfStringAndStringAltDto } from '../../../swagger/models/api-key-value-pair-of-string-and-string';
import { KeyValuePairOfStringAndStringAlt } from '../../models/key-value-pair-of-string-and-string-alt.interface';

export function adaptKeyValuePairOfStringAndStringAltToUI(source?: ApiKeyValuePairOfStringAndStringAltDto | null): KeyValuePairOfStringAndStringAlt {
  return {
    key: source?.Key ?? '',
    value: source?.Value ?? '',
  };
}

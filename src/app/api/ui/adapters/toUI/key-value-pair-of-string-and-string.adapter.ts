import { ApiKeyValuePairOfStringAndString } from '../../../swagger/models/api-key-value-pair-of-string-and-string';
import { KeyValuePairOfStringAndString } from '../../models/key-value-pair-of-string-and-string.interface';

export function adaptKeyValuePairOfStringAndStringToUI(source?: ApiKeyValuePairOfStringAndString | null): KeyValuePairOfStringAndString {
  return {
    key: source?.Key ?? '',
    value: source?.Value ?? '',
  };
}

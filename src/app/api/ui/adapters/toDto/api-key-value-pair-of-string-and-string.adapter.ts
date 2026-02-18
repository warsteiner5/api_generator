import { KeyValuePairOfStringAndString } from '../../models/key-value-pair-of-string-and-string.interface';
import { ApiKeyValuePairOfStringAndString } from '../../../swagger/models/api-key-value-pair-of-string-and-string';

export function adaptApiKeyValuePairOfStringAndString(source?: KeyValuePairOfStringAndString | null): ApiKeyValuePairOfStringAndString {
  return {
    Key: source?.key,
    Value: source?.value,
  };
}

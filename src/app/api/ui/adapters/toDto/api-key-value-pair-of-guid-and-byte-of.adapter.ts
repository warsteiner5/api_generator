import { KeyValuePairOfGuidAndByteOf } from '../../models/key-value-pair-of-guid-and-byte-of.interface';
import { ApiKeyValuePairOfGuidAndByteOf } from '../../../swagger/models/api-key-value-pair-of-guid-and-byte-of';

export function adaptApiKeyValuePairOfGuidAndByteOf(source?: KeyValuePairOfGuidAndByteOf | null): ApiKeyValuePairOfGuidAndByteOf {
  return {
    Key: source?.key,
    Value: source?.value,
  };
}

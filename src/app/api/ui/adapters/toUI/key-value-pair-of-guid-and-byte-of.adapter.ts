import { ApiKeyValuePairOfGuidAndByteOf } from '../../../swagger/models/api-key-value-pair-of-guid-and-byte-of';
import { KeyValuePairOfGuidAndByteOf } from '../../models/key-value-pair-of-guid-and-byte-of.interface';

export function adaptKeyValuePairOfGuidAndByteOfToUI(source?: ApiKeyValuePairOfGuidAndByteOf | null): KeyValuePairOfGuidAndByteOf {
  return {
    key: source?.Key ?? '',
    value: source?.Value ?? '',
  };
}

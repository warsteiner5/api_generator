import { ApiKeyValuePairOfGuidAndByteOfAltDto } from '../../../swagger/models/api-key-value-pair-of-guid-and-byte-of';
import { KeyValuePairOfGuidAndByteOfAlt } from '../../models/key-value-pair-of-guid-and-byte-of-alt.interface';

export function adaptKeyValuePairOfGuidAndByteOfAltToUI(source?: ApiKeyValuePairOfGuidAndByteOfAltDto | null): KeyValuePairOfGuidAndByteOfAlt {
  return {
    key: source?.Key ?? '',
    value: source?.Value ?? '',
  };
}

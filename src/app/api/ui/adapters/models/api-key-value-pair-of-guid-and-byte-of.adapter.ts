import { KeyValuePairOfGuidAndByteOfAlt } from '../../models/key-value-pair-of-guid-and-byte-of-alt.interface';
import { ApiKeyValuePairOfGuidAndByteOfAltDto } from '../../../swagger/models/api-key-value-pair-of-guid-and-byte-of';

export const apiKeyValuePairOfGuidAndByteOfAltDtoAdapter = (source?: KeyValuePairOfGuidAndByteOfAlt | null): ApiKeyValuePairOfGuidAndByteOfAltDto => {
  return {
    Key: source?.key,
    Value: source?.value,
  };
}

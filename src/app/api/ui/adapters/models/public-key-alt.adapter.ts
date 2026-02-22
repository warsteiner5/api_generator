import { ApiPublicKeyAltDto } from '../../../swagger/models/api-public-key';
import { PublicKeyAlt } from '../../models/public-key-alt.interface';
import { asnEncodedDataAltAdapter } from './asn-encoded-data-alt.adapter';
import { asymmetricAlgorithmAltAdapter } from './asymmetric-algorithm-alt.adapter';
import { oidAltAdapter } from './oid-alt.adapter';

export const publicKeyAltAdapter = (source?: ApiPublicKeyAltDto | null): PublicKeyAlt => {
  return {
    encodedKeyValue: source?.EncodedKeyValue === null ? undefined : asnEncodedDataAltAdapter(source?.EncodedKeyValue),
    encodedParameters: source?.EncodedParameters === null ? undefined : asnEncodedDataAltAdapter(source?.EncodedParameters),
    key: source?.Key === null ? undefined : asymmetricAlgorithmAltAdapter(source?.Key),
    oid: source?.Oid === null ? undefined : oidAltAdapter(source?.Oid),
  };
}

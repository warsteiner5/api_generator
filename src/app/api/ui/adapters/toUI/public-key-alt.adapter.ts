import { ApiPublicKeyAltDto } from '../../../swagger/models/api-public-key';
import { PublicKeyAlt } from '../../models/public-key-alt.interface';
import { adaptAsnEncodedDataAltToUI } from './asn-encoded-data-alt.adapter';
import { adaptAsymmetricAlgorithmAltToUI } from './asymmetric-algorithm-alt.adapter';
import { adaptOidAltToUI } from './oid-alt.adapter';

export function adaptPublicKeyAltToUI(source?: ApiPublicKeyAltDto | null): PublicKeyAlt {
  return {
    encodedKeyValue: adaptAsnEncodedDataAltToUI(source?.EncodedKeyValue),
    encodedParameters: adaptAsnEncodedDataAltToUI(source?.EncodedParameters),
    key: adaptAsymmetricAlgorithmAltToUI(source?.Key),
    oid: adaptOidAltToUI(source?.Oid),
  };
}

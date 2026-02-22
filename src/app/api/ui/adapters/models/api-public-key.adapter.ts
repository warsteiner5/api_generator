import { PublicKeyAlt } from '../../models/public-key-alt.interface';
import { ApiPublicKeyAltDto } from '../../../swagger/models/api-public-key';
import { apiAsnEncodedDataAltDtoAdapter } from './api-asn-encoded-data.adapter';
import { apiAsymmetricAlgorithmAltDtoAdapter } from './api-asymmetric-algorithm.adapter';
import { apiOidAltDtoAdapter } from './api-oid.adapter';

export const apiPublicKeyAltDtoAdapter = (source?: PublicKeyAlt | null): ApiPublicKeyAltDto => {
  return {
    EncodedKeyValue: source?.encodedKeyValue === null ? undefined : apiAsnEncodedDataAltDtoAdapter(source?.encodedKeyValue),
    EncodedParameters: source?.encodedParameters === null ? undefined : apiAsnEncodedDataAltDtoAdapter(source?.encodedParameters),
    Key: source?.key === null ? undefined : apiAsymmetricAlgorithmAltDtoAdapter(source?.key),
    Oid: source?.oid === null ? undefined : apiOidAltDtoAdapter(source?.oid),
  };
}

import { PublicKeyAlt } from '../../models/public-key-alt.interface';
import { ApiPublicKeyAltDto } from '../../../swagger/models/api-public-key';
import { adaptApiAsnEncodedDataAltDto } from './api-asn-encoded-data.adapter';
import { adaptApiAsymmetricAlgorithmAltDto } from './api-asymmetric-algorithm.adapter';
import { adaptApiOidAltDto } from './api-oid.adapter';

export function adaptApiPublicKeyAltDto(source?: PublicKeyAlt | null): ApiPublicKeyAltDto {
  return {
    EncodedKeyValue: adaptApiAsnEncodedDataAltDto(source?.encodedKeyValue),
    EncodedParameters: adaptApiAsnEncodedDataAltDto(source?.encodedParameters),
    Key: adaptApiAsymmetricAlgorithmAltDto(source?.key),
    Oid: adaptApiOidAltDto(source?.oid),
  };
}

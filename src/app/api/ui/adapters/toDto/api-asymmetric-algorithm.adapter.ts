import { AsymmetricAlgorithmAlt } from '../../models/asymmetric-algorithm-alt.interface';
import { ApiAsymmetricAlgorithmAltDto } from '../../../swagger/models/api-asymmetric-algorithm';
import { adaptApiKeySizesAltDto } from './api-key-sizes.adapter';

export function adaptApiAsymmetricAlgorithmAltDto(source?: AsymmetricAlgorithmAlt | null): ApiAsymmetricAlgorithmAltDto {
  return {
    KeyExchangeAlgorithm: source?.keyExchangeAlgorithm,
    KeySize: source?.keySize,
    LegalKeySizes: (source?.legalKeySizes ?? []).map((item) => adaptApiKeySizesAltDto(item)),
    SignatureAlgorithm: source?.signatureAlgorithm,
  };
}

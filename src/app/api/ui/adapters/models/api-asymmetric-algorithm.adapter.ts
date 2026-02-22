import { AsymmetricAlgorithmAlt } from '../../models/asymmetric-algorithm-alt.interface';
import { ApiAsymmetricAlgorithmAltDto } from '../../../swagger/models/api-asymmetric-algorithm';
import { apiKeySizesAltDtoAdapter } from './api-key-sizes.adapter';

export const apiAsymmetricAlgorithmAltDtoAdapter = (source?: AsymmetricAlgorithmAlt | null): ApiAsymmetricAlgorithmAltDto => {
  return {
    KeyExchangeAlgorithm: source?.keyExchangeAlgorithm,
    KeySize: source?.keySize,
    LegalKeySizes: source?.legalKeySizes?.map((item) => apiKeySizesAltDtoAdapter(item)),
    SignatureAlgorithm: source?.signatureAlgorithm,
  };
}

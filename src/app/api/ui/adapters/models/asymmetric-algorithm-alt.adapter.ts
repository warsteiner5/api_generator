import { ApiAsymmetricAlgorithmAltDto } from '../../../swagger/models/api-asymmetric-algorithm';
import { AsymmetricAlgorithmAlt } from '../../models/asymmetric-algorithm-alt.interface';
import { keySizesAltAdapter } from './key-sizes-alt.adapter';

export const asymmetricAlgorithmAltAdapter = (source?: ApiAsymmetricAlgorithmAltDto | null): AsymmetricAlgorithmAlt => {
  return {
    keyExchangeAlgorithm: source?.KeyExchangeAlgorithm,
    keySize: source?.KeySize,
    legalKeySizes: source?.LegalKeySizes?.map((item) => keySizesAltAdapter(item)),
    signatureAlgorithm: source?.SignatureAlgorithm,
  };
}

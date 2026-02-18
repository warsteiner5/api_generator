import { ApiAsymmetricAlgorithmAltDto } from '../../../swagger/models/api-asymmetric-algorithm';
import { AsymmetricAlgorithmAlt } from '../../models/asymmetric-algorithm-alt.interface';
import { adaptKeySizesAltToUI } from './key-sizes-alt.adapter';

export function adaptAsymmetricAlgorithmAltToUI(source?: ApiAsymmetricAlgorithmAltDto | null): AsymmetricAlgorithmAlt {
  return {
    keyExchangeAlgorithm: source?.KeyExchangeAlgorithm ?? '',
    keySize: source?.KeySize ?? 0,
    legalKeySizes: (source?.LegalKeySizes ?? []).map((item) => adaptKeySizesAltToUI(item)),
    signatureAlgorithm: source?.SignatureAlgorithm ?? '',
  };
}

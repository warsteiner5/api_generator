import { KeySizesAlt } from './key-sizes-alt.interface';

export interface AsymmetricAlgorithmAlt {
  keyExchangeAlgorithm: string;
  keySize: number;
  legalKeySizes: KeySizesAlt[];
  signatureAlgorithm: string;
}

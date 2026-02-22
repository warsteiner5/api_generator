import { KeySizesAlt } from './key-sizes-alt.interface';

// @ts-ignore
export interface AsymmetricAlgorithmAlt {
  keyExchangeAlgorithm: string;
  keySize: number;
  legalKeySizes: KeySizesAlt[];
  signatureAlgorithm: string;
}

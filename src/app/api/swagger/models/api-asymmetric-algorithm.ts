/* tslint:disable */
/* eslint-disable */
import { ApiKeySizesAltDto } from '../models/api-key-sizes';
export interface ApiAsymmetricAlgorithmAltDto {
  KeyExchangeAlgorithm?: string | null;
  KeySize?: number;
  LegalKeySizes?: Array<ApiKeySizesAltDto> | null;
  SignatureAlgorithm?: string | null;
}

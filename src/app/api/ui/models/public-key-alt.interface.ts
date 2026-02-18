import { AsnEncodedDataAlt } from './asn-encoded-data-alt.interface';
import { AsymmetricAlgorithmAlt } from './asymmetric-algorithm-alt.interface';
import { OidAlt } from './oid-alt.interface';

export interface PublicKeyAlt {
  encodedKeyValue: AsnEncodedDataAlt;
  encodedParameters: AsnEncodedDataAlt;
  key: AsymmetricAlgorithmAlt;
  oid: OidAlt;
}

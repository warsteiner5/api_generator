import { AsymmetricAlgorithmAlt } from './asymmetric-algorithm-alt.interface';
import { OidAlt } from './oid-alt.interface';
import { PublicKeyAlt } from './public-key-alt.interface';
import { SafeCertContextHandleAlt } from './safe-cert-context-handle-alt.interface';
import { X500DistinguishedNameAlt } from './x-500-distinguished-name-alt.interface';
import { X509CertificateAlt } from './x-509-certificate-alt.interface';

// @ts-ignore
export interface X509Certificate2Alt extends X509CertificateAlt {
  archived: boolean;
  extensions: any[];
  friendlyName: string;
  issuerName: X500DistinguishedNameAlt;
  notAfter: string;
  notBefore: string;
  hasPrivateKey: boolean;
  privateKey: AsymmetricAlgorithmAlt;
  publicKey: PublicKeyAlt;
  rawData: string;
  serialNumber: string;
  subjectName: X500DistinguishedNameAlt;
  signatureAlgorithm: OidAlt;
  thumbprint: string;
  version: number;
  certContext: SafeCertContextHandleAlt;
}

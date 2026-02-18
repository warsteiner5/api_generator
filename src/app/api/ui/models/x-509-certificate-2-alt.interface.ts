import { AsymmetricAlgorithmAlt } from './asymmetric-algorithm-alt.interface';
import { OidAlt } from './oid-alt.interface';
import { PublicKeyAlt } from './public-key-alt.interface';
import { SafeCertContextHandleAlt } from './safe-cert-context-handle-alt.interface';
import { X500DistinguishedNameAlt } from './x-500-distinguished-name-alt.interface';
import { X509CertificateAlt } from './x-509-certificate-alt.interface';

export type X509Certificate2Alt = X509CertificateAlt & { 'Archived'?: boolean; 'Extensions'?: Array<any> | null; 'FriendlyName'?: string | null; 'IssuerName'?: X500DistinguishedNameAlt | null; 'NotAfter'?: string; 'NotBefore'?: string; 'HasPrivateKey'?: boolean; 'PrivateKey'?: AsymmetricAlgorithmAlt | null; 'PublicKey'?: PublicKeyAlt | null; 'RawData'?: string | null; 'SerialNumber'?: string | null; 'SubjectName'?: X500DistinguishedNameAlt | null; 'SignatureAlgorithm'?: OidAlt | null; 'Thumbprint'?: string | null; 'Version'?: number; 'CertContext'?: SafeCertContextHandleAlt | null; };

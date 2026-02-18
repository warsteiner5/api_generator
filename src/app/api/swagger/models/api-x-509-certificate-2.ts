/* tslint:disable */
/* eslint-disable */
import { ApiAsymmetricAlgorithmAltDto } from '../models/api-asymmetric-algorithm';
import { ApiOidAltDto } from '../models/api-oid';
import { ApiPublicKeyAltDto } from '../models/api-public-key';
import { ApiSafeCertContextHandleAltDto } from '../models/api-safe-cert-context-handle';
import { ApiX500DistinguishedNameAltDto } from '../models/api-x-500-distinguished-name';
import { ApiX509CertificateAltDto } from '../models/api-x-509-certificate';
export type ApiX509Certificate2AltDto = ApiX509CertificateAltDto & {
'Archived'?: boolean;
'Extensions'?: Array<any> | null;
'FriendlyName'?: string | null;
'IssuerName'?: ApiX500DistinguishedNameAltDto | null;
'NotAfter'?: string;
'NotBefore'?: string;
'HasPrivateKey'?: boolean;
'PrivateKey'?: ApiAsymmetricAlgorithmAltDto | null;
'PublicKey'?: ApiPublicKeyAltDto | null;
'RawData'?: string | null;
'SerialNumber'?: string | null;
'SubjectName'?: ApiX500DistinguishedNameAltDto | null;
'SignatureAlgorithm'?: ApiOidAltDto | null;
'Thumbprint'?: string | null;
'Version'?: number;
'CertContext'?: ApiSafeCertContextHandleAltDto | null;
};

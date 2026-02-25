import { ApiX509Certificate2AltDto } from '../../../swagger/models/api-x-509-certificate-2';
import { X509Certificate2Alt } from '../../models/x-509-certificate-2-alt.interface';
import { asymmetricAlgorithmAltAdapter } from './asymmetric-algorithm-alt.adapter';
import { oidAltAdapter } from './oid-alt.adapter';
import { publicKeyAltAdapter } from './public-key-alt.adapter';
import { safeCertContextHandleAltAdapter } from './safe-cert-context-handle-alt.adapter';
import { x500DistinguishedNameAltAdapter } from './x-500-distinguished-name-alt.adapter';
import { x509CertificateAltAdapter } from './x-509-certificate-alt.adapter';

export const x509Certificate2AltAdapter = (source?: ApiX509Certificate2AltDto | null): X509Certificate2Alt => {
  return {
    ...x509CertificateAltAdapter(source as unknown as Parameters<typeof x509CertificateAltAdapter>[0]),
    archived: source?.Archived,
    extensions: source?.Extensions,
    friendlyName: source?.FriendlyName,
    issuerName: source?.IssuerName === null ? undefined : x500DistinguishedNameAltAdapter(source?.IssuerName),
    notAfter: source?.NotAfter,
    notBefore: source?.NotBefore,
    hasPrivateKey: source?.HasPrivateKey,
    privateKey: source?.PrivateKey === null ? undefined : asymmetricAlgorithmAltAdapter(source?.PrivateKey),
    publicKey: source?.PublicKey === null ? undefined : publicKeyAltAdapter(source?.PublicKey),
    rawData: source?.RawData,
    serialNumber: source?.SerialNumber,
    subjectName: source?.SubjectName === null ? undefined : x500DistinguishedNameAltAdapter(source?.SubjectName),
    signatureAlgorithm: source?.SignatureAlgorithm === null ? undefined : oidAltAdapter(source?.SignatureAlgorithm),
    thumbprint: source?.Thumbprint,
    version: source?.Version,
    certContext: source?.CertContext === null ? undefined : safeCertContextHandleAltAdapter(source?.CertContext),
  };
}

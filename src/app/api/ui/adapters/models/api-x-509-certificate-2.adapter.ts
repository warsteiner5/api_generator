import { X509Certificate2Alt } from '../../models/x-509-certificate-2-alt.interface';
import { ApiX509Certificate2AltDto } from '../../../swagger/models/api-x-509-certificate-2';
import { apiAsymmetricAlgorithmAltDtoAdapter } from './api-asymmetric-algorithm.adapter';
import { apiOidAltDtoAdapter } from './api-oid.adapter';
import { apiPublicKeyAltDtoAdapter } from './api-public-key.adapter';
import { apiSafeCertContextHandleAltDtoAdapter } from './api-safe-cert-context-handle.adapter';
import { apiX500DistinguishedNameAltDtoAdapter } from './api-x-500-distinguished-name.adapter';
import { apiX509CertificateAltDtoAdapter } from './api-x-509-certificate.adapter';

export const apiX509Certificate2AltDtoAdapter = (source?: X509Certificate2Alt | null): ApiX509Certificate2AltDto => {
  return {
    ...apiX509CertificateAltDtoAdapter(source as unknown as Parameters<typeof apiX509CertificateAltDtoAdapter>[0]),
    Archived: source?.archived,
    Extensions: source?.extensions,
    FriendlyName: source?.friendlyName,
    IssuerName: source?.issuerName === null ? undefined : apiX500DistinguishedNameAltDtoAdapter(source?.issuerName),
    NotAfter: source?.notAfter,
    NotBefore: source?.notBefore,
    HasPrivateKey: source?.hasPrivateKey,
    PrivateKey: source?.privateKey === null ? undefined : apiAsymmetricAlgorithmAltDtoAdapter(source?.privateKey),
    PublicKey: source?.publicKey === null ? undefined : apiPublicKeyAltDtoAdapter(source?.publicKey),
    RawData: source?.rawData,
    SerialNumber: source?.serialNumber,
    SubjectName: source?.subjectName === null ? undefined : apiX500DistinguishedNameAltDtoAdapter(source?.subjectName),
    SignatureAlgorithm: source?.signatureAlgorithm === null ? undefined : apiOidAltDtoAdapter(source?.signatureAlgorithm),
    Thumbprint: source?.thumbprint,
    Version: source?.version,
    CertContext: source?.certContext === null ? undefined : apiSafeCertContextHandleAltDtoAdapter(source?.certContext),
  };
}

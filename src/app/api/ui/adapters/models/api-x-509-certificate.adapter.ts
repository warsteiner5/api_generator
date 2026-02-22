import { X509CertificateAlt } from '../../models/x-509-certificate-alt.interface';
import { ApiX509CertificateAltDto } from '../../../swagger/models/api-x-509-certificate';
import { apiIntPtrAltDtoAdapter } from './api-int-ptr.adapter';
import { apiSafeCertContextHandle2AltDtoAdapter } from './api-safe-cert-context-handle-2.adapter';

export const apiX509CertificateAltDtoAdapter = (source?: X509CertificateAlt | null): ApiX509CertificateAltDto => {
  return {
    CertContext: source?.certContext === null ? undefined : apiSafeCertContextHandle2AltDtoAdapter(source?.certContext),
    Handle: source?.handle === null ? undefined : apiIntPtrAltDtoAdapter(source?.handle),
    Issuer: source?.issuer,
    Subject: source?.subject,
  };
}

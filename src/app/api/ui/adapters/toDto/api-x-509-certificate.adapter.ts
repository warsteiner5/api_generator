import { X509CertificateAlt } from '../../models/x-509-certificate-alt.interface';
import { ApiX509CertificateAltDto } from '../../../swagger/models/api-x-509-certificate';
import { adaptApiIntPtrAltDto } from './api-int-ptr.adapter';
import { adaptApiSafeCertContextHandle2AltDto } from './api-safe-cert-context-handle-2.adapter';

export function adaptApiX509CertificateAltDto(source?: X509CertificateAlt | null): ApiX509CertificateAltDto {
  return {
    CertContext: adaptApiSafeCertContextHandle2AltDto(source?.certContext),
    Handle: adaptApiIntPtrAltDto(source?.handle),
    Issuer: source?.issuer,
    Subject: source?.subject,
  };
}

import { ApiX509CertificateAltDto } from '../../../swagger/models/api-x-509-certificate';
import { X509CertificateAlt } from '../../models/x-509-certificate-alt.interface';
import { intPtrAltAdapter } from './int-ptr-alt.adapter';
import { safeCertContextHandle2AltAdapter } from './safe-cert-context-handle-2-alt.adapter';

export const x509CertificateAltAdapter = (source?: ApiX509CertificateAltDto | null): X509CertificateAlt => {
  return {
    certContext: source?.CertContext === null ? undefined : safeCertContextHandle2AltAdapter(source?.CertContext),
    handle: source?.Handle === null ? undefined : intPtrAltAdapter(source?.Handle),
    issuer: source?.Issuer,
    subject: source?.Subject,
  };
}

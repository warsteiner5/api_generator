import { ApiX509CertificateAltDto } from '../../../swagger/models/api-x-509-certificate';
import { X509CertificateAlt } from '../../models/x-509-certificate-alt.interface';
import { adaptIntPtrAltToUI } from './int-ptr-alt.adapter';
import { adaptSafeCertContextHandle2AltToUI } from './safe-cert-context-handle-2-alt.adapter';

export function adaptX509CertificateAltToUI(source?: ApiX509CertificateAltDto | null): X509CertificateAlt {
  return {
    certContext: adaptSafeCertContextHandle2AltToUI(source?.CertContext),
    handle: adaptIntPtrAltToUI(source?.Handle),
    issuer: source?.Issuer ?? '',
    subject: source?.Subject ?? '',
  };
}

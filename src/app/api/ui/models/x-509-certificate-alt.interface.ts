import { IntPtrAlt } from './int-ptr-alt.interface';
import { SafeCertContextHandle2Alt } from './safe-cert-context-handle-2-alt.interface';

// @ts-ignore
export interface X509CertificateAlt {
  certContext: SafeCertContextHandle2Alt;
  handle: IntPtrAlt;
  issuer: string;
  subject: string;
}

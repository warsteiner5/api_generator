/* tslint:disable */
/* eslint-disable */
import { ApiIntPtrAltDto } from '../models/api-int-ptr';
import { ApiSafeCertContextHandle2AltDto } from '../models/api-safe-cert-context-handle-2';
export interface ApiX509CertificateAltDto {
  CertContext?: ApiSafeCertContextHandle2AltDto | null;
  Handle?: ApiIntPtrAltDto;
  Issuer?: string | null;
  Subject?: string | null;
}

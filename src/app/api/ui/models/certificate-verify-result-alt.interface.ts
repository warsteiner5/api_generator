import { AuthStatusEnum } from '../enums/auth-status.enum';

// @ts-ignore
export interface CertificateVerifyResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

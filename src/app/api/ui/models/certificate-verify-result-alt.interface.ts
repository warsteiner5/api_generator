import { AuthStatusEnum } from '../enums/auth-status.enum';

export interface CertificateVerifyResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

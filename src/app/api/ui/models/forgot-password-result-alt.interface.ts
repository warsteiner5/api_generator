import { AuthStatusEnum } from '../enums/auth-status.enum';

export interface ForgotPasswordResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

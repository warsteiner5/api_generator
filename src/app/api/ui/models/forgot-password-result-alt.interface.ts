import { AuthStatusEnum } from '../enums/auth-status.enum';

// @ts-ignore
export interface ForgotPasswordResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

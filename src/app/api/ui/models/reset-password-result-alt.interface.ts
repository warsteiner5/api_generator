import { AuthStatusEnum } from '../enums/auth-status.enum';

export interface ResetPasswordResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

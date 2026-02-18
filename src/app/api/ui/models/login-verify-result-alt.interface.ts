import { AuthStatusEnum } from '../enums/auth-status.enum';

export interface LoginVerifyResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

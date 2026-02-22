import { AuthStatusEnum } from '../enums/auth-status.enum';

// @ts-ignore
export interface LoginVerifyResultAlt {
  errorMessage: string;
  status: AuthStatusEnum;
}

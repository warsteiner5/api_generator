import { AuthStatusEnum } from '../enums/auth-status.enum';
import { UserInOrganization } from './user-in-organization.interface';

// @ts-ignore
export interface SignInResultAlt {
  accessToken: string;
  errorMessage: string;
  status: AuthStatusEnum;
  userInOrganizations: UserInOrganization[];
}

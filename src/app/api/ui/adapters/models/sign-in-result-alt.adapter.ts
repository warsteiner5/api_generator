import { ApiSignInResultAltDto } from '../../../swagger/models/api-sign-in-result';
import { SignInResultAlt } from '../../models/sign-in-result-alt.interface';
import { authStatusEnumAdapter } from '../enums/auth-status-enum.adapter';
import { userInOrganizationAdapter } from './user-in-organization.adapter';

export const signInResultAltAdapter = (source?: ApiSignInResultAltDto | null): SignInResultAlt => {
  return {
    accessToken: source?.AccessToken,
    errorMessage: source?.ErrorMessage,
    status: source?.Status === null ? undefined : authStatusEnumAdapter(source?.Status),
    userInOrganizations: source?.UserInOrganizations?.map((item) => userInOrganizationAdapter(item)),
  };
}

import { SignInResultAlt } from '../../models/sign-in-result-alt.interface';
import { ApiSignInResultAltDto } from '../../../swagger/models/api-sign-in-result';
import { apiAuthStatusEnumAdapter } from '../enums/api-auth-status-enum.adapter';
import { apiUserInOrganizationDtoAdapter } from './api-user-in-organization-dto.adapter';

export const apiSignInResultAltDtoAdapter = (source?: SignInResultAlt | null): ApiSignInResultAltDto => {
  return {
    AccessToken: source?.accessToken,
    ErrorMessage: source?.errorMessage,
    Status: source?.status === null ? undefined : apiAuthStatusEnumAdapter(source?.status),
    UserInOrganizations: source?.userInOrganizations?.map((item) => apiUserInOrganizationDtoAdapter(item)),
  };
}

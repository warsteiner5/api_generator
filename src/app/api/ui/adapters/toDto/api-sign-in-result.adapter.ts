import { SignInResultAlt } from '../../models/sign-in-result-alt.interface';
import { ApiSignInResultAltDto } from '../../../swagger/models/api-sign-in-result';
import { adaptApiAuthStatusEnum } from './api-auth-status-enum.adapter';
import { adaptApiUserInOrganizationDto } from './api-user-in-organization-dto.adapter';

export function adaptApiSignInResultAltDto(source?: SignInResultAlt | null): ApiSignInResultAltDto {
  return {
    AccessToken: source?.accessToken,
    ErrorMessage: source?.errorMessage,
    Status: adaptApiAuthStatusEnum(source?.status),
    UserInOrganizations: (source?.userInOrganizations ?? []).map((item) => adaptApiUserInOrganizationDto(item)),
  };
}

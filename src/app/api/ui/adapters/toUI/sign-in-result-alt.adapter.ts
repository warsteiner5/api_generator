import { ApiSignInResultAltDto } from '../../../swagger/models/api-sign-in-result';
import { SignInResultAlt } from '../../models/sign-in-result-alt.interface';
import { adaptAuthStatusEnumToUI } from './auth-status-enum.adapter';
import { adaptUserInOrganizationToUI } from './user-in-organization.adapter';

export function adaptSignInResultAltToUI(source?: ApiSignInResultAltDto | null): SignInResultAlt {
  return {
    accessToken: source?.AccessToken ?? '',
    errorMessage: source?.ErrorMessage ?? '',
    status: adaptAuthStatusEnumToUI(source?.Status),
    userInOrganizations: (source?.UserInOrganizations ?? []).map((item) => adaptUserInOrganizationToUI(item)),
  };
}

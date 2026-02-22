import { ApiResetPasswordResultAltDto } from '../../../swagger/models/api-reset-password-result';
import { ResetPasswordResultAlt } from '../../models/reset-password-result-alt.interface';
import { authStatusEnumAdapter } from '../enums/auth-status-enum.adapter';

export const resetPasswordResultAltAdapter = (source?: ApiResetPasswordResultAltDto | null): ResetPasswordResultAlt => {
  return {
    errorMessage: source?.ErrorMessage,
    status: source?.Status === null ? undefined : authStatusEnumAdapter(source?.Status),
  };
}

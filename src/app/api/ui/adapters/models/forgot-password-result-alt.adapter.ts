import { ApiForgotPasswordResultAltDto } from '../../../swagger/models/api-forgot-password-result';
import { ForgotPasswordResultAlt } from '../../models/forgot-password-result-alt.interface';
import { authStatusEnumAdapter } from '../enums/auth-status-enum.adapter';

export const forgotPasswordResultAltAdapter = (source?: ApiForgotPasswordResultAltDto | null): ForgotPasswordResultAlt => {
  return {
    errorMessage: source?.ErrorMessage,
    status: source?.Status === null ? undefined : authStatusEnumAdapter(source?.Status),
  };
}

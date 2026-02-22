import { ForgotPasswordResultAlt } from '../../models/forgot-password-result-alt.interface';
import { ApiForgotPasswordResultAltDto } from '../../../swagger/models/api-forgot-password-result';
import { apiAuthStatusEnumAdapter } from '../enums/api-auth-status-enum.adapter';

export const apiForgotPasswordResultAltDtoAdapter = (source?: ForgotPasswordResultAlt | null): ApiForgotPasswordResultAltDto => {
  return {
    ErrorMessage: source?.errorMessage,
    Status: source?.status === null ? undefined : apiAuthStatusEnumAdapter(source?.status),
  };
}

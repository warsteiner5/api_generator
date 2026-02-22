import { ResetPasswordResultAlt } from '../../models/reset-password-result-alt.interface';
import { ApiResetPasswordResultAltDto } from '../../../swagger/models/api-reset-password-result';
import { apiAuthStatusEnumAdapter } from '../enums/api-auth-status-enum.adapter';

export const apiResetPasswordResultAltDtoAdapter = (source?: ResetPasswordResultAlt | null): ApiResetPasswordResultAltDto => {
  return {
    ErrorMessage: source?.errorMessage,
    Status: source?.status === null ? undefined : apiAuthStatusEnumAdapter(source?.status),
  };
}

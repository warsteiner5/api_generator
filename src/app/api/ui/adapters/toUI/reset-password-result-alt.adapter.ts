import { ApiResetPasswordResultAltDto } from '../../../swagger/models/api-reset-password-result';
import { ResetPasswordResultAlt } from '../../models/reset-password-result-alt.interface';
import { adaptAuthStatusEnumToUI } from './auth-status-enum.adapter';

export function adaptResetPasswordResultAltToUI(source?: ApiResetPasswordResultAltDto | null): ResetPasswordResultAlt {
  return {
    errorMessage: source?.ErrorMessage ?? '',
    status: adaptAuthStatusEnumToUI(source?.Status),
  };
}

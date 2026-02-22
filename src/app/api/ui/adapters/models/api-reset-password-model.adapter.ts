import { ResetPasswordModelAlt } from '../../models/reset-password-model-alt.interface';
import { ApiResetPasswordModelAltDto } from '../../../swagger/models/api-reset-password-model';

export const apiResetPasswordModelAltDtoAdapter = (source?: ResetPasswordModelAlt | null): ApiResetPasswordModelAltDto => {
  return {
    NewPassword: source?.newPassword,
    RecoveryRequestCode: source?.recoveryRequestCode,
  };
}

import { ApiResetPasswordModelAltDto } from '../../../swagger/models/api-reset-password-model';
import { ResetPasswordModelAlt } from '../../models/reset-password-model-alt.interface';

export function adaptResetPasswordModelAltToUI(source?: ApiResetPasswordModelAltDto | null): ResetPasswordModelAlt {
  return {
    newPassword: source?.NewPassword ?? '',
    recoveryRequestCode: source?.RecoveryRequestCode ?? '',
  };
}

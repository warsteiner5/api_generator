import { ApiForgotPasswordResultAltDto } from '../../../swagger/models/api-forgot-password-result';
import { ForgotPasswordResultAlt } from '../../models/forgot-password-result-alt.interface';
import { adaptAuthStatusEnumToUI } from './auth-status-enum.adapter';

export function adaptForgotPasswordResultAltToUI(source?: ApiForgotPasswordResultAltDto | null): ForgotPasswordResultAlt {
  return {
    errorMessage: source?.ErrorMessage ?? '',
    status: adaptAuthStatusEnumToUI(source?.Status),
  };
}

import { ApiForgotPasswordModelAltDto } from '../../../swagger/models/api-forgot-password-model';
import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { adaptHumanometrOptionsAltToUI } from './humanometr-options-alt.adapter';

export function adaptForgotPasswordModelAltToUI(source?: ApiForgotPasswordModelAltDto | null): ForgotPasswordModelAlt {
  return {
    email: source?.Email ?? '',
    humanometrOptions: adaptHumanometrOptionsAltToUI(source?.HumanometrOptions),
    login: source?.Login ?? '',
  };
}

import { ApiForgotPasswordModelAltDto } from '../../../swagger/models/api-forgot-password-model';
import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { humanometrOptionsAltAdapter } from './humanometr-options-alt.adapter';

export const forgotPasswordModelAltAdapter = (source?: ApiForgotPasswordModelAltDto | null): ForgotPasswordModelAlt => {
  return {
    email: source?.Email,
    humanometrOptions: source?.HumanometrOptions === null ? undefined : humanometrOptionsAltAdapter(source?.HumanometrOptions),
    login: source?.Login,
  };
}

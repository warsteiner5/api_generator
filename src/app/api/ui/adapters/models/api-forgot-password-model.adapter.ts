import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { ApiForgotPasswordModelAltDto } from '../../../swagger/models/api-forgot-password-model';
import { apiHumanometrOptionsAltDtoAdapter } from './api-humanometr-options.adapter';

export const apiForgotPasswordModelAltDtoAdapter = (source?: ForgotPasswordModelAlt | null): ApiForgotPasswordModelAltDto => {
  return {
    Email: source?.email,
    HumanometrOptions: source?.humanometrOptions === null ? undefined : apiHumanometrOptionsAltDtoAdapter(source?.humanometrOptions),
    Login: source?.login,
  };
}

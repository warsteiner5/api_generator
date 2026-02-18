import { ForgotPasswordModelAlt } from '../../models/forgot-password-model-alt.interface';
import { ApiForgotPasswordModelAltDto } from '../../../swagger/models/api-forgot-password-model';
import { adaptApiHumanometrOptionsAltDto } from './api-humanometr-options.adapter';

export function adaptApiForgotPasswordModelAltDto(source?: ForgotPasswordModelAlt | null): ApiForgotPasswordModelAltDto {
  return {
    Email: source?.email,
    HumanometrOptions: adaptApiHumanometrOptionsAltDto(source?.humanometrOptions),
    Login: source?.login,
  };
}

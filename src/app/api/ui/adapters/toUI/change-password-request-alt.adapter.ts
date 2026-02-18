import { ApiChangePasswordRequestAltDto } from '../../../swagger/models/api-change-password-request';
import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { adaptHumanometrOptionsAltToUI } from './humanometr-options-alt.adapter';

export function adaptChangePasswordRequestAltToUI(source?: ApiChangePasswordRequestAltDto | null): ChangePasswordRequestAlt {
  return {
    humanometrOptions: adaptHumanometrOptionsAltToUI(source?.HumanometrOptions),
    login: source?.Login ?? '',
    newPassword: source?.NewPassword ?? '',
    password: source?.Password ?? '',
  };
}

import { ApiChangePasswordRequestAltDto } from '../../../swagger/models/api-change-password-request';
import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { humanometrOptionsAltAdapter } from './humanometr-options-alt.adapter';

export const changePasswordRequestAltAdapter = (source?: ApiChangePasswordRequestAltDto | null): ChangePasswordRequestAlt => {
  return {
    humanometrOptions: source?.HumanometrOptions === null ? undefined : humanometrOptionsAltAdapter(source?.HumanometrOptions),
    login: source?.Login,
    newPassword: source?.NewPassword,
    password: source?.Password,
  };
}

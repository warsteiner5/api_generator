import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { ApiChangePasswordRequestAltDto } from '../../../swagger/models/api-change-password-request';
import { apiHumanometrOptionsAltDtoAdapter } from './api-humanometr-options.adapter';

export const apiChangePasswordRequestAltDtoAdapter = (source?: ChangePasswordRequestAlt | null): ApiChangePasswordRequestAltDto => {
  return {
    HumanometrOptions: source?.humanometrOptions === null ? undefined : apiHumanometrOptionsAltDtoAdapter(source?.humanometrOptions),
    Login: source?.login,
    NewPassword: source?.newPassword,
    Password: source?.password,
  };
}

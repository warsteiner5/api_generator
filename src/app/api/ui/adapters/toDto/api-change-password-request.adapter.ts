import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { ApiChangePasswordRequestAltDto } from '../../../swagger/models/api-change-password-request';
import { adaptApiHumanometrOptionsAltDto } from './api-humanometr-options.adapter';

export function adaptApiChangePasswordRequestAltDto(source?: ChangePasswordRequestAlt | null): ApiChangePasswordRequestAltDto {
  return {
    HumanometrOptions: adaptApiHumanometrOptionsAltDto(source?.humanometrOptions),
    Login: source?.login,
    NewPassword: source?.newPassword,
    Password: source?.password,
  };
}

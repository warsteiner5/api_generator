import { LoginVerifyModelAlt } from '../../models/login-verify-model-alt.interface';
import { ApiLoginVerifyModelAltDto } from '../../../swagger/models/api-login-verify-model';

export const apiLoginVerifyModelAltDtoAdapter = (source?: LoginVerifyModelAlt | null): ApiLoginVerifyModelAltDto => {
  return {
    Login: source?.login,
    Password: source?.password,
  };
}

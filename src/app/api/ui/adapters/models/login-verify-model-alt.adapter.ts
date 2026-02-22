import { ApiLoginVerifyModelAltDto } from '../../../swagger/models/api-login-verify-model';
import { LoginVerifyModelAlt } from '../../models/login-verify-model-alt.interface';

export const loginVerifyModelAltAdapter = (source?: ApiLoginVerifyModelAltDto | null): LoginVerifyModelAlt => {
  return {
    login: source?.Login,
    password: source?.Password,
  };
}

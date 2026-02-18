import { ApiLoginVerifyModelAltDto } from '../../../swagger/models/api-login-verify-model';
import { LoginVerifyModelAlt } from '../../models/login-verify-model-alt.interface';

export function adaptLoginVerifyModelAltToUI(source?: ApiLoginVerifyModelAltDto | null): LoginVerifyModelAlt {
  return {
    login: source?.Login ?? '',
    password: source?.Password ?? '',
  };
}

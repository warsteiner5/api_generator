import { ApiLoginVerifyResultAltDto } from '../../../swagger/models/api-login-verify-result';
import { LoginVerifyResultAlt } from '../../models/login-verify-result-alt.interface';
import { adaptAuthStatusEnumToUI } from './auth-status-enum.adapter';

export function adaptLoginVerifyResultAltToUI(source?: ApiLoginVerifyResultAltDto | null): LoginVerifyResultAlt {
  return {
    errorMessage: source?.ErrorMessage ?? '',
    status: adaptAuthStatusEnumToUI(source?.Status),
  };
}

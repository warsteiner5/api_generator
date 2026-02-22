import { ApiLoginVerifyResultAltDto } from '../../../swagger/models/api-login-verify-result';
import { LoginVerifyResultAlt } from '../../models/login-verify-result-alt.interface';
import { authStatusEnumAdapter } from '../enums/auth-status-enum.adapter';

export const loginVerifyResultAltAdapter = (source?: ApiLoginVerifyResultAltDto | null): LoginVerifyResultAlt => {
  return {
    errorMessage: source?.ErrorMessage,
    status: source?.Status === null ? undefined : authStatusEnumAdapter(source?.Status),
  };
}

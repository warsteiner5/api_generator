import { LoginVerifyResultAlt } from '../../models/login-verify-result-alt.interface';
import { ApiLoginVerifyResultAltDto } from '../../../swagger/models/api-login-verify-result';
import { apiAuthStatusEnumAdapter } from '../enums/api-auth-status-enum.adapter';

export const apiLoginVerifyResultAltDtoAdapter = (source?: LoginVerifyResultAlt | null): ApiLoginVerifyResultAltDto => {
  return {
    ErrorMessage: source?.errorMessage,
    Status: source?.status === null ? undefined : apiAuthStatusEnumAdapter(source?.status),
  };
}

import { LoginVerifyResultAlt } from '../../models/login-verify-result-alt.interface';
import { ApiLoginVerifyResultAltDto } from '../../../swagger/models/api-login-verify-result';
import { adaptApiAuthStatusEnum } from './api-auth-status-enum.adapter';

export function adaptApiLoginVerifyResultAltDto(source?: LoginVerifyResultAlt | null): ApiLoginVerifyResultAltDto {
  return {
    ErrorMessage: source?.errorMessage,
    Status: adaptApiAuthStatusEnum(source?.status),
  };
}

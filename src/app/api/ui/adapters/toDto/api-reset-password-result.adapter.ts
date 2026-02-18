import { ResetPasswordResultAlt } from '../../models/reset-password-result-alt.interface';
import { ApiResetPasswordResultAltDto } from '../../../swagger/models/api-reset-password-result';
import { adaptApiAuthStatusEnum } from './api-auth-status-enum.adapter';

export function adaptApiResetPasswordResultAltDto(source?: ResetPasswordResultAlt | null): ApiResetPasswordResultAltDto {
  return {
    ErrorMessage: source?.errorMessage,
    Status: adaptApiAuthStatusEnum(source?.status),
  };
}

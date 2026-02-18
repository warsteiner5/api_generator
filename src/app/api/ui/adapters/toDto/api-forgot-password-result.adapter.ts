import { ForgotPasswordResultAlt } from '../../models/forgot-password-result-alt.interface';
import { ApiForgotPasswordResultAltDto } from '../../../swagger/models/api-forgot-password-result';
import { adaptApiAuthStatusEnum } from './api-auth-status-enum.adapter';

export function adaptApiForgotPasswordResultAltDto(source?: ForgotPasswordResultAlt | null): ApiForgotPasswordResultAltDto {
  return {
    ErrorMessage: source?.errorMessage,
    Status: adaptApiAuthStatusEnum(source?.status),
  };
}

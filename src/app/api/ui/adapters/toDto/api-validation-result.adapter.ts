import { ValidationResultAlt } from '../../models/validation-result-alt.interface';
import { ApiValidationResultAltDto } from '../../../swagger/models/api-validation-result';

export function adaptApiValidationResultAltDto(source?: ValidationResultAlt | null): ApiValidationResultAltDto {
  return {
    Errors: source?.errors as any,
    IsCritical: source?.isCritical,
    IsFailed: source?.isFailed,
    IsSucceed: source?.isSucceed,
  };
}

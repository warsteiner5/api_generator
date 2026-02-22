import { ApiValidationResultAltDto } from '../../../swagger/models/api-validation-result';
import { ValidationResultAlt } from '../../models/validation-result-alt.interface';

export const validationResultAltAdapter = (source?: ApiValidationResultAltDto | null): ValidationResultAlt => {
  return {
    errors: source?.Errors as any,
    isCritical: source?.IsCritical,
    isFailed: source?.IsFailed,
    isSucceed: source?.IsSucceed,
  };
}

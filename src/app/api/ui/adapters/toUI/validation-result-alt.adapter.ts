import { ApiValidationResultAltDto } from '../../../swagger/models/api-validation-result';
import { ValidationResultAlt } from '../../models/validation-result-alt.interface';

export function adaptValidationResultAltToUI(source?: ApiValidationResultAltDto | null): ValidationResultAlt {
  return {
    errors: (source?.Errors ?? null) as any,
    isCritical: source?.IsCritical ?? false,
    isFailed: source?.IsFailed ?? false,
    isSucceed: source?.IsSucceed ?? false,
  };
}

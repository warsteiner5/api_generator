import { ApiCanCreateChildTradeValidationResultAltDto } from '../../../swagger/models/api-can-create-child-trade-validation-result';
import { CanCreateChildTradeValidationResultAlt } from '../../models/can-create-child-trade-validation-result-alt.interface';

export function adaptCanCreateChildTradeValidationResultAltToUI(source?: ApiCanCreateChildTradeValidationResultAltDto | null): CanCreateChildTradeValidationResultAlt {
  return {
    canCreateChild: source?.CanCreateChild ?? false,
    errorMessage: source?.ErrorMessage ?? '',
  };
}

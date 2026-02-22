import { ApiCanCreateChildTradeValidationResultAltDto } from '../../../swagger/models/api-can-create-child-trade-validation-result';
import { CanCreateChildTradeValidationResultAlt } from '../../models/can-create-child-trade-validation-result-alt.interface';

export const canCreateChildTradeValidationResultAltAdapter = (source?: ApiCanCreateChildTradeValidationResultAltDto | null): CanCreateChildTradeValidationResultAlt => {
  return {
    canCreateChild: source?.CanCreateChild,
    errorMessage: source?.ErrorMessage,
  };
}

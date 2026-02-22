import { CanCreateChildTradeValidationResultAlt } from '../../models/can-create-child-trade-validation-result-alt.interface';
import { ApiCanCreateChildTradeValidationResultAltDto } from '../../../swagger/models/api-can-create-child-trade-validation-result';

export const apiCanCreateChildTradeValidationResultAltDtoAdapter = (source?: CanCreateChildTradeValidationResultAlt | null): ApiCanCreateChildTradeValidationResultAltDto => {
  return {
    CanCreateChild: source?.canCreateChild,
    ErrorMessage: source?.errorMessage,
  };
}

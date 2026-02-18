import { ApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../../swagger/models/api-can-create-from-not-took-place-trade-validation-dto';
import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';

export function adaptCanCreateFromNotTookPlaceTradeValidationToUI(source?: ApiCanCreateFromNotTookPlaceTradeValidationDto | null): CanCreateFromNotTookPlaceTradeValidation {
  return {
    ordersCount: source?.OrdersCount ?? 0,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId ?? 0,
  };
}

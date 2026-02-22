import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';
import { ApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../../swagger/models/api-can-create-from-not-took-place-trade-validation-dto';

export const apiCanCreateFromNotTookPlaceTradeValidationDtoAdapter = (source?: CanCreateFromNotTookPlaceTradeValidation | null): ApiCanCreateFromNotTookPlaceTradeValidationDto => {
  return {
    OrdersCount: source?.ordersCount,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
  };
}

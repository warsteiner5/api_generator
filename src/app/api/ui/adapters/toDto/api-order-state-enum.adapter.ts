import { OrderStateEnum } from '../../enums/order-state.enum';
import { ApiOrderStateEnum } from '../../../swagger/models/api-order-state-enum';

export function adaptApiOrderStateEnum(source?: OrderStateEnum | null): ApiOrderStateEnum {
  switch (source) {
    case OrderStateEnum.Draft:
      return ApiOrderStateEnum.Draft;
    case OrderStateEnum.RequestToProvider:
      return ApiOrderStateEnum.RequestToProvider;
    case OrderStateEnum.ApprovedByProvider:
      return ApiOrderStateEnum.ApprovedByProvider;
    case OrderStateEnum.RefusedByProvider:
      return ApiOrderStateEnum.RefusedByProvider;
    case OrderStateEnum.DealSigning:
      return ApiOrderStateEnum.DealSigning;
    case OrderStateEnum.DealSigned:
      return ApiOrderStateEnum.DealSigned;
    case OrderStateEnum.Cancelled:
      return ApiOrderStateEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: OrderStateEnum=${String(source)}`);
  }
}

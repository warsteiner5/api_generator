import { ApiOrderStateEnum } from '../../../swagger/models/api-order-state-enum';
import { OrderStateEnum } from '../../enums/order-state.enum';

export const orderStateEnumAdapter = (source?: ApiOrderStateEnum | null): OrderStateEnum => {
  switch (source) {
    case ApiOrderStateEnum.Draft:
      return OrderStateEnum.Draft;
    case ApiOrderStateEnum.RequestToProvider:
      return OrderStateEnum.RequestToProvider;
    case ApiOrderStateEnum.ApprovedByProvider:
      return OrderStateEnum.ApprovedByProvider;
    case ApiOrderStateEnum.RefusedByProvider:
      return OrderStateEnum.RefusedByProvider;
    case ApiOrderStateEnum.DealSigning:
      return OrderStateEnum.DealSigning;
    case ApiOrderStateEnum.DealSigned:
      return OrderStateEnum.DealSigned;
    case ApiOrderStateEnum.Cancelled:
      return OrderStateEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: ApiOrderStateEnum=${String(source)}`);
  }
}

import { ApiOrderGridDto } from '../../../swagger/models/api-order-grid-dto';
import { OrderGrid } from '../../models/order-grid.interface';
import { adaptTradeBusinessFlowEnumToUI } from './trade-business-flow-enum.adapter';

export function adaptOrderGridToUI(source?: ApiOrderGridDto | null): OrderGrid {
  return {
    flowType: adaptTradeBusinessFlowEnumToUI(source?.FlowType),
    id: source?.Id ?? 0,
    orderName: source?.OrderName ?? '',
    orderState: source?.OrderState ?? '',
    price: source?.Price ?? 0,
  };
}

import { ApiOrderGridDto } from '../../../swagger/models/api-order-grid-dto';
import { OrderGrid } from '../../models/order-grid.interface';
import { tradeBusinessFlowEnumAdapter } from '../enums/trade-business-flow-enum.adapter';

export const orderGridAdapter = (source?: ApiOrderGridDto | null): OrderGrid => {
  return {
    flowType: source?.FlowType === null ? undefined : tradeBusinessFlowEnumAdapter(source?.FlowType),
    id: source?.Id,
    orderName: source?.OrderName,
    orderState: source?.OrderState,
    price: source?.Price,
  };
}

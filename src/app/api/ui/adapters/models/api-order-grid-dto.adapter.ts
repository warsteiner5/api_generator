import { OrderGrid } from '../../models/order-grid.interface';
import { ApiOrderGridDto } from '../../../swagger/models/api-order-grid-dto';
import { apiTradeBusinessFlowEnumAdapter } from '../enums/api-trade-business-flow-enum.adapter';

export const apiOrderGridDtoAdapter = (source?: OrderGrid | null): ApiOrderGridDto => {
  return {
    FlowType: source?.flowType === null ? undefined : apiTradeBusinessFlowEnumAdapter(source?.flowType),
    Id: source?.id,
    OrderName: source?.orderName,
    OrderState: source?.orderState,
    Price: source?.price,
  };
}

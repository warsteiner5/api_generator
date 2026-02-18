import { OrderGrid } from '../../models/order-grid.interface';
import { ApiOrderGridDto } from '../../../swagger/models/api-order-grid-dto';
import { adaptApiTradeBusinessFlowEnum } from './api-trade-business-flow-enum.adapter';

export function adaptApiOrderGridDto(source?: OrderGrid | null): ApiOrderGridDto {
  return {
    FlowType: adaptApiTradeBusinessFlowEnum(source?.flowType),
    Id: source?.id,
    OrderName: source?.orderName,
    OrderState: source?.orderState,
    Price: source?.price,
  };
}

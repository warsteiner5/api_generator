import { ApiTradeViewFormOptionsDto } from '../../../swagger/models/api-trade-view-form-options-dto';
import { TradeViewFormOptions } from '../../models/trade-view-form-options.interface';

export const tradeViewFormOptionsAdapter = (source?: ApiTradeViewFormOptionsDto | null): TradeViewFormOptions => {
  return {
    showProductAdditionalParameters: source?.ShowProductAdditionalParameters,
    showTradeIsOnlySmp: source?.ShowTradeIsOnlySmp,
  };
}

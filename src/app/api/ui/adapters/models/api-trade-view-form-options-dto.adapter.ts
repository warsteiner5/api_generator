import { TradeViewFormOptions } from '../../models/trade-view-form-options.interface';
import { ApiTradeViewFormOptionsDto } from '../../../swagger/models/api-trade-view-form-options-dto';

export const apiTradeViewFormOptionsDtoAdapter = (source?: TradeViewFormOptions | null): ApiTradeViewFormOptionsDto => {
  return {
    ShowProductAdditionalParameters: source?.showProductAdditionalParameters,
    ShowTradeIsOnlySmp: source?.showTradeIsOnlySmp,
  };
}

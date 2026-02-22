import { ApiTradeGroupViewDto } from '../../../swagger/models/api-trade-group-view-dto';
import { TradeGroupView } from '../../models/trade-group-view.interface';

export const tradeGroupViewAdapter = (source?: ApiTradeGroupViewDto | null): TradeGroupView => {
  return {
    guid: source?.Guid,
    id: source?.Id,
  };
}

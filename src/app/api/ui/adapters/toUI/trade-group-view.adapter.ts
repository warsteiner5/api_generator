import { ApiTradeGroupViewDto } from '../../../swagger/models/api-trade-group-view-dto';
import { TradeGroupView } from '../../models/trade-group-view.interface';

export function adaptTradeGroupViewToUI(source?: ApiTradeGroupViewDto | null): TradeGroupView {
  return {
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
  };
}

import { TradeGroupView } from '../../models/trade-group-view.interface';
import { ApiTradeGroupViewDto } from '../../../swagger/models/api-trade-group-view-dto';

export const apiTradeGroupViewDtoAdapter = (source?: TradeGroupView | null): ApiTradeGroupViewDto => {
  return {
    Guid: source?.guid,
    Id: source?.id,
  };
}

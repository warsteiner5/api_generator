import { ApiTradePlanMarketShortDto } from '../../../swagger/models/api-trade-plan-market-short-dto';
import { TradePlanMarketShort } from '../../models/trade-plan-market-short.interface';

export const tradePlanMarketShortAdapter = (source?: ApiTradePlanMarketShortDto | null): TradePlanMarketShort => {
  return {
    createDateTime: source?.CreateDateTime,
    fileGuid: source?.FileGuid,
    id: source?.Id,
    itemsCount: source?.ItemsCount,
    name: source?.Name,
  };
}

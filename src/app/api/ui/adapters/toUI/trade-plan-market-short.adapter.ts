import { ApiTradePlanMarketShortDto } from '../../../swagger/models/api-trade-plan-market-short-dto';
import { TradePlanMarketShort } from '../../models/trade-plan-market-short.interface';

export function adaptTradePlanMarketShortToUI(source?: ApiTradePlanMarketShortDto | null): TradePlanMarketShort {
  return {
    createDateTime: source?.CreateDateTime ?? '',
    fileGuid: source?.FileGuid ?? '',
    id: source?.Id ?? 0,
    itemsCount: source?.ItemsCount ?? 0,
    name: source?.Name ?? '',
  };
}

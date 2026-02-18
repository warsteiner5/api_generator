import { ApiTradePlansArchiveFilterObjectAltDto } from '../../../swagger/models/api-trade-plans-archive-filter-object';
import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';

export function adaptTradePlansArchiveFilterObjectAltToUI(source?: ApiTradePlansArchiveFilterObjectAltDto | null): TradePlansArchiveFilterObjectAlt {
  return (source ?? {}) as TradePlansArchiveFilterObjectAlt;
}

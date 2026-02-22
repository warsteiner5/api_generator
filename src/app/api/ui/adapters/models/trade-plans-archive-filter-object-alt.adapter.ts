import { ApiTradePlansArchiveFilterObjectAltDto } from '../../../swagger/models/api-trade-plans-archive-filter-object';
import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';

export const tradePlansArchiveFilterObjectAltAdapter = (source?: ApiTradePlansArchiveFilterObjectAltDto | null): TradePlansArchiveFilterObjectAlt => {
  return (source ?? {}) as TradePlansArchiveFilterObjectAlt;
}

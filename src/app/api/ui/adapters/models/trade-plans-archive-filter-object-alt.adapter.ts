import { ApiTradePlansArchiveFilterObjectAltDto } from '../../../swagger/models/api-trade-plans-archive-filter-object';
import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const tradePlansArchiveFilterObjectAltAdapter = (source?: ApiTradePlansArchiveFilterObjectAltDto | null): TradePlansArchiveFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
  };
}

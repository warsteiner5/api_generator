import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';
import { ApiTradePlansArchiveFilterObjectAltDto } from '../../../swagger/models/api-trade-plans-archive-filter-object';

export const apiTradePlansArchiveFilterObjectAltDtoAdapter = (source?: TradePlansArchiveFilterObjectAlt | null): ApiTradePlansArchiveFilterObjectAltDto => {
  return (source ?? {}) as ApiTradePlansArchiveFilterObjectAltDto;
}

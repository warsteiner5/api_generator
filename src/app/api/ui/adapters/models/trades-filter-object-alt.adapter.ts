import { ApiTradesFilterObjectAltDto } from '../../../swagger/models/api-trades-filter-object';
import { TradesFilterObjectAlt } from '../../models/trades-filter-object-alt.interface';

export const tradesFilterObjectAltAdapter = (source?: ApiTradesFilterObjectAltDto | null): TradesFilterObjectAlt => {
  return (source ?? {}) as TradesFilterObjectAlt;
}

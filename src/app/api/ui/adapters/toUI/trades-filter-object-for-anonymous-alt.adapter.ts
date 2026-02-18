import { ApiTradesFilterObjectForAnonymousAltDto } from '../../../swagger/models/api-trades-filter-object-for-anonymous';
import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';

export function adaptTradesFilterObjectForAnonymousAltToUI(source?: ApiTradesFilterObjectForAnonymousAltDto | null): TradesFilterObjectForAnonymousAlt {
  return (source ?? {}) as TradesFilterObjectForAnonymousAlt;
}

import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';
import { ApiTradesFilterObjectForAnonymousAltDto } from '../../../swagger/models/api-trades-filter-object-for-anonymous';

export const apiTradesFilterObjectForAnonymousAltDtoAdapter = (source?: TradesFilterObjectForAnonymousAlt | null): ApiTradesFilterObjectForAnonymousAltDto => {
  return (source ?? {}) as ApiTradesFilterObjectForAnonymousAltDto;
}

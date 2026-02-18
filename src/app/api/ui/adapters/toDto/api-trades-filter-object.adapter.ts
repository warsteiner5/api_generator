import { TradesFilterObjectAlt } from '../../models/trades-filter-object-alt.interface';
import { ApiTradesFilterObjectAltDto } from '../../../swagger/models/api-trades-filter-object';

export function adaptApiTradesFilterObjectAltDto(source?: TradesFilterObjectAlt | null): ApiTradesFilterObjectAltDto {
  return (source ?? {}) as ApiTradesFilterObjectAltDto;
}

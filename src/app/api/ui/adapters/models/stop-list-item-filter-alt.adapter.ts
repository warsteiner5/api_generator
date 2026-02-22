import { ApiStopListItemFilterAltDto } from '../../../swagger/models/api-stop-list-item-filter';
import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';

export const stopListItemFilterAltAdapter = (source?: ApiStopListItemFilterAltDto | null): StopListItemFilterAlt => {
  return (source ?? {}) as StopListItemFilterAlt;
}

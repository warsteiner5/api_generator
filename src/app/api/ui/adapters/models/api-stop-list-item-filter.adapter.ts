import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { ApiStopListItemFilterAltDto } from '../../../swagger/models/api-stop-list-item-filter';

export const apiStopListItemFilterAltDtoAdapter = (source?: StopListItemFilterAlt | null): ApiStopListItemFilterAltDto => {
  return (source ?? {}) as ApiStopListItemFilterAltDto;
}

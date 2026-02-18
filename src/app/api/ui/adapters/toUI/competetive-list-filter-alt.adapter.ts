import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';
import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';

export function adaptCompetetiveListFilterAltToUI(source?: ApiCompetetiveListFilterAltDto | null): CompetetiveListFilterAlt {
  return (source ?? {}) as CompetetiveListFilterAlt;
}

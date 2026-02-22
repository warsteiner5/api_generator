import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';
import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';

export const competetiveListFilterAltAdapter = (source?: ApiCompetetiveListFilterAltDto | null): CompetetiveListFilterAlt => {
  return (source ?? {}) as CompetetiveListFilterAlt;
}

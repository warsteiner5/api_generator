import { ApiApplicationFilterObjectAltDto } from '../../../swagger/models/api-application-filter-object';
import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';

export function adaptApplicationFilterObjectAltToUI(source?: ApiApplicationFilterObjectAltDto | null): ApplicationFilterObjectAlt {
  return (source ?? {}) as ApplicationFilterObjectAlt;
}

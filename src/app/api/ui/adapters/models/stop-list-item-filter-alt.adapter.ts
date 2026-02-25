import { ApiStopListItemFilterAltDto } from '../../../swagger/models/api-stop-list-item-filter';
import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const stopListItemFilterAltAdapter = (source?: ApiStopListItemFilterAltDto | null): StopListItemFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    organizationId: source?.OrganizationId,
    activeOnly: source?.ActiveOnly,
  };
}

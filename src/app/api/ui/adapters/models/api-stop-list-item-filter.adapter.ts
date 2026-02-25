import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { ApiStopListItemFilterAltDto } from '../../../swagger/models/api-stop-list-item-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiStopListItemFilterAltDtoAdapter = (source?: StopListItemFilterAlt | null): ApiStopListItemFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    OrganizationId: source?.organizationId,
    ActiveOnly: source?.activeOnly,
  };
}

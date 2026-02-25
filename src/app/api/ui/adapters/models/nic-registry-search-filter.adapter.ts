import { ApiNicRegistrySearchFilterDto } from '../../../swagger/models/api-nic-registry-search-filter-dto';
import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const nicRegistrySearchFilterAdapter = (source?: ApiNicRegistrySearchFilterDto | null): NicRegistrySearchFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    participantName: source?.ParticipantName,
    dateFrom: source?.DateFrom,
    dateBy: source?.DateBy,
  };
}

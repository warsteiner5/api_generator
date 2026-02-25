import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';
import { ApiNicRegistrySearchFilterDto } from '../../../swagger/models/api-nic-registry-search-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiNicRegistrySearchFilterDtoAdapter = (source?: NicRegistrySearchFilter | null): ApiNicRegistrySearchFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    ParticipantName: source?.participantName,
    DateFrom: source?.dateFrom,
    DateBy: source?.dateBy,
  };
}

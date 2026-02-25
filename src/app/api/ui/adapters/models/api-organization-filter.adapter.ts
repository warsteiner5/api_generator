import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';
import { ApiOrganizationFilterAltDto } from '../../../swagger/models/api-organization-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiOrganizationFilterAltDtoAdapter = (source?: OrganizationFilterAlt | null): ApiOrganizationFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    KeyWords: source?.keyWords,
    RegionRF: source?.regionRF,
    KladrCodeRegionRF: source?.kladrCodeRegionRF,
  };
}

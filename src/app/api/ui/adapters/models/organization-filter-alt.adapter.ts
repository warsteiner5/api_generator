import { ApiOrganizationFilterAltDto } from '../../../swagger/models/api-organization-filter';
import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const organizationFilterAltAdapter = (source?: ApiOrganizationFilterAltDto | null): OrganizationFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    keyWords: source?.KeyWords,
    regionRF: source?.RegionRF,
    kladrCodeRegionRF: source?.KladrCodeRegionRF,
  };
}

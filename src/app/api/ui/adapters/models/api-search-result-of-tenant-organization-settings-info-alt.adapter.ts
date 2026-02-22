import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-api-search-result-of-tenant-organization-settings-info';
import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { tenantOrganizationSettingsInfoAltAdapter } from './tenant-organization-settings-info-alt.adapter';

export const apiSearchResultOfTenantOrganizationSettingsInfoAltAdapter = (source?: ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto | null): ApiSearchResultOfTenantOrganizationSettingsInfoAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => tenantOrganizationSettingsInfoAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

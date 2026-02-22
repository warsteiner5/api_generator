import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-api-search-result-of-tenant-organization-settings-info';
import { apiTenantOrganizationSettingsInfoAltDtoAdapter } from './api-tenant-organization-settings-info.adapter';

export const apiApiSearchResultOfTenantOrganizationSettingsInfoAltDtoAdapter = (source?: ApiSearchResultOfTenantOrganizationSettingsInfoAlt | null): ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => apiTenantOrganizationSettingsInfoAltDtoAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

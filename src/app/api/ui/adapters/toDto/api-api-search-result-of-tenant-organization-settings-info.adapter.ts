import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-api-search-result-of-tenant-organization-settings-info';
import { adaptApiTenantOrganizationSettingsInfoAltDto } from './api-tenant-organization-settings-info.adapter';

export function adaptApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto(source?: ApiSearchResultOfTenantOrganizationSettingsInfoAlt | null): ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiTenantOrganizationSettingsInfoAltDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}

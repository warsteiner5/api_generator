import { ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-api-search-result-of-tenant-organization-settings-info';
import { ApiSearchResultOfTenantOrganizationSettingsInfoAlt } from '../../models/api-search-result-of-tenant-organization-settings-info-alt.interface';
import { adaptTenantOrganizationSettingsInfoAltToUI } from './tenant-organization-settings-info-alt.adapter';

export function adaptApiSearchResultOfTenantOrganizationSettingsInfoAltToUI(source?: ApiApiSearchResultOfTenantOrganizationSettingsInfoAltDto | null): ApiSearchResultOfTenantOrganizationSettingsInfoAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptTenantOrganizationSettingsInfoAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}

import { TenantFlowTypeAltEnum } from '../../enums/tenant-flow-type-alt.enum';
import { TenantsSearchByTenantFlowType$Params } from '../../../swagger/fn/tenants/tenants-search-by-tenant-flow-type';
import { apiTenantFlowTypeAltEnumAdapter } from '../../adapters/enums/api-tenant-flow-type.adapter';

// @ts-ignore
export interface TenantsSearchByTenantFlowTypeParams {
  flowType: TenantFlowTypeAltEnum;
}

export function tenantsSearchByTenantFlowTypeAdapter(params?: TenantsSearchByTenantFlowTypeParams): TenantsSearchByTenantFlowType$Params {
  if (!params) {
    return {} as TenantsSearchByTenantFlowType$Params;
  }
  return {
      flowType: apiTenantFlowTypeAltEnumAdapter(params.flowType),
  };
}

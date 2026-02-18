import { TenantFlowTypeAltEnum } from '../../enums/tenant-flow-type-alt.enum';
import { TenantsSearchByTenantFlowType$Params } from '../../../swagger/fn/tenants/tenants-search-by-tenant-flow-type';
import { adaptApiTenantFlowTypeAltEnum } from '../../adapters/toDto/api-tenant-flow-type.adapter';

export interface TenantsSearchByTenantFlowTypeParams {
  flowType: TenantFlowTypeAltEnum;
}

export const tenantsSearchByTenantFlowTypeParamsAdapter = {
  adapt(params?: TenantsSearchByTenantFlowTypeParams): TenantsSearchByTenantFlowType$Params {
    if (!params) {
      return {} as TenantsSearchByTenantFlowType$Params;
    }
    return {
      flowType: adaptApiTenantFlowTypeAltEnum(params.flowType),
    };
  }
};

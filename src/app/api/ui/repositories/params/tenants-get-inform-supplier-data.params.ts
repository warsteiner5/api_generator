import { TenantsGetInformSupplierData$Params } from '../../../swagger/fn/tenants/tenants-get-inform-supplier-data';

// @ts-ignore
export interface TenantsGetInformSupplierDataParams {
  tenantId: number;
}

export function tenantsGetInformSupplierDataAdapter(params?: TenantsGetInformSupplierDataParams): TenantsGetInformSupplierData$Params {
  if (!params) {
    return {} as TenantsGetInformSupplierData$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}

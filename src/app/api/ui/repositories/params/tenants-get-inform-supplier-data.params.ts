import { TenantsGetInformSupplierData$Params } from '../../../swagger/fn/tenants/tenants-get-inform-supplier-data';

export interface TenantsGetInformSupplierDataParams {
  tenantId: number;
}

export const tenantsGetInformSupplierDataParamsAdapter = {
  adapt(params?: TenantsGetInformSupplierDataParams): TenantsGetInformSupplierData$Params {
    if (!params) {
      return {} as TenantsGetInformSupplierData$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};

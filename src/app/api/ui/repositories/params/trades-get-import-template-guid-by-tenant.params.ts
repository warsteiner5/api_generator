import { TradesGetImportTemplateGuidByTenant$Params } from '../../../swagger/fn/trades/trades-get-import-template-guid-by-tenant';

export interface TradesGetImportTemplateGuidByTenantParams {
}

export const tradesGetImportTemplateGuidByTenantParamsAdapter = {
  adapt(params?: TradesGetImportTemplateGuidByTenantParams): TradesGetImportTemplateGuidByTenant$Params {
    if (!params) {
      return {} as TradesGetImportTemplateGuidByTenant$Params;
    }
    return {
    };
  }
};

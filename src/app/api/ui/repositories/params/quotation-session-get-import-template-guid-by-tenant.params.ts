import { QuotationSessionGetImportTemplateGuidByTenant$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-import-template-guid-by-tenant';

export interface QuotationSessionGetImportTemplateGuidByTenantParams {
}

export const quotationSessionGetImportTemplateGuidByTenantParamsAdapter = {
  adapt(params?: QuotationSessionGetImportTemplateGuidByTenantParams): QuotationSessionGetImportTemplateGuidByTenant$Params {
    if (!params) {
      return {} as QuotationSessionGetImportTemplateGuidByTenant$Params;
    }
    return {
    };
  }
};

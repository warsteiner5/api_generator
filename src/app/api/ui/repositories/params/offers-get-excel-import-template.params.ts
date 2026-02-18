import { OffersGetExcelImportTemplate$Params } from '../../../swagger/fn/offers/offers-get-excel-import-template';

export interface OffersGetExcelImportTemplateParams {
}

export const offersGetExcelImportTemplateParamsAdapter = {
  adapt(params?: OffersGetExcelImportTemplateParams): OffersGetExcelImportTemplate$Params {
    if (!params) {
      return {} as OffersGetExcelImportTemplate$Params;
    }
    return {
    };
  }
};

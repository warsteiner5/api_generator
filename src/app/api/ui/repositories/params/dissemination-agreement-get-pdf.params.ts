import { DisseminationAgreementGetPdf$Params } from '../../../swagger/fn/dissemination-agreement/dissemination-agreement-get-pdf';

export interface DisseminationAgreementGetPdfParams {
}

export const disseminationAgreementGetPdfParamsAdapter = {
  adapt(params?: DisseminationAgreementGetPdfParams): DisseminationAgreementGetPdf$Params {
    if (!params) {
      return {} as DisseminationAgreementGetPdf$Params;
    }
    return {
    };
  }
};
